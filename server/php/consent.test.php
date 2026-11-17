<?php
declare(strict_types=1);
require __DIR__ . '/consent-core.php';
function verify_consent(bool $condition, string $message): void { if (!$condition) throw new RuntimeException($message); }
$choice = ['version' => '2026-11-17.2', 'status' => 'accepted', 'receipt' => '12345678-1234-4123-8123-123456789012'];
verify_consent(valid_consent_choice($choice), 'Valid choice');
verify_consent(!valid_consent_choice([...$choice, 'status' => 'dismissed']), 'Dismissal is not permission');
verify_consent(!valid_consent_choice([...$choice, 'version' => '2020-01-01']), 'Stale version');
verify_consent(!valid_consent_choice([...$choice, 'receipt' => '../escape']), 'Invalid receipt');
$directory = sys_get_temp_dir() . '/seha-consent-test-' . bin2hex(random_bytes(8));
mkdir($directory, 0700);
try {
    $expired = $directory . '/2020-01-01.jsonl';
    file_put_contents($expired, "expired\n"); touch($expired, time() - 367 * 86400);
    verify_consent(record_consent_choice($directory, [...$choice, 'email' => 'private@example.com', 'ip' => '1.2.3.4']), 'Record saved');
    verify_consent(!file_exists($expired), 'Expired journal removed');
    $record = json_decode(trim(file_get_contents($directory . '/' . gmdate('Y-m-d') . '.jsonl')), true);
    verify_consent(array_keys($record) === ['receipt', 'status', 'version', 'receivedAt'], 'No personal fields stored');
    verify_consent(record_consent_choice($directory, [...$choice, 'status' => 'rejected']), 'Refusal saved');
    echo "Consent validation, minimal evidence and retention checks passed\n";
} finally {
    foreach (glob($directory . '/*') ?: [] as $file) unlink($file);
    rmdir($directory);
}
