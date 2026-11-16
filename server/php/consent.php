<?php
declare(strict_types=1);
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
try {
    require __DIR__ . '/private/consent-core.php';
    require __DIR__ . '/private/inquiry-core.php';
    $success = false;
    if (!in_array($_SERVER['HTTP_ORIGIN'] ?? '', ['https://seha-group.ru', 'https://www.seha-group.ru'], true)) {
        http_response_code(403);
    } elseif ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('Allow: POST'); http_response_code(405);
    } elseif (strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0])) !== 'application/json') {
        http_response_code(415);
    } elseif ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 1024) {
        http_response_code(413);
    } else {
        $raw = file_get_contents('php://input', false, null, 0, 1025);
        $data = is_string($raw) && strlen($raw) <= 1024 ? json_decode($raw, true) : null;
        if (!is_array($data) || !valid_consent_choice($data)) http_response_code(400);
        elseif (!inquiry_rate_allowed(sys_get_temp_dir() . '/seha-consent-rate-' . substr(hash('sha256', __DIR__), 0, 16) . '/ip', $_SERVER['REMOTE_ADDR'] ?? 'unknown', 120)
            || !inquiry_rate_allowed(sys_get_temp_dir() . '/seha-consent-rate-' . substr(hash('sha256', __DIR__), 0, 16) . '/global', 'all', 2000)) http_response_code(429);
        elseif (!record_consent_choice(__DIR__ . '/private/consents', $data)) http_response_code(503);
        else $success = true;
    }
    echo json_encode(['success' => $success]);
} catch (Throwable $error) {
    http_response_code(503); echo '{"success":false}';
}
