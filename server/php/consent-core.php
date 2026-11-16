<?php
declare(strict_types=1);
const SEHA_PRIVACY_VERSION = '2026-11-17';
function valid_consent_choice(array $data): bool
{
    return ($data['version'] ?? null) === SEHA_PRIVACY_VERSION
        && in_array($data['status'] ?? null, ['accepted', 'rejected'], true)
        && is_string($data['receipt'] ?? null)
        && preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/', $data['receipt']) === 1;
}
function record_consent_choice(string $directory, array $data): bool
{
    if (!valid_consent_choice($data)) return false;
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) return false;
    // Protected journals: choice, random receipt, document revision and server time only.
    // No IP address, browser fingerprint, contact details or request URL is recorded here.
    foreach (glob($directory . '/*.jsonl') ?: [] as $file) {
        if (preg_match('/^\d{4}-\d{2}-\d{2}\.jsonl$/', basename($file))
            && filemtime($file) < time() - 365 * 86400) unlink($file);
    }
    $record = ['receipt' => $data['receipt'], 'status' => $data['status'],
        'version' => SEHA_PRIVACY_VERSION, 'receivedAt' => gmdate('c')];
    return file_put_contents($directory . '/' . gmdate('Y-m-d') . '.jsonl',
        json_encode($record, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX) !== false;
}
