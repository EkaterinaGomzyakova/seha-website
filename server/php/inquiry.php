<?php
declare(strict_types=1);

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('Vary: Origin');

function respond(int $status, bool $success = false): never
{
    http_response_code($status);
    echo json_encode(['success' => $success]);
    exit;
}

try {
    require __DIR__ . '/private/inquiry-core.php';
    $configPath = __DIR__ . '/private/config.php';
    $config = is_file($configPath) ? require $configPath : [];
    $origins = $config['origins'] ?? ['https://seha-group.ru', 'https://www.seha-group.ru'];
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (!in_array($origin, $origins, true)) respond(403);
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Allow: POST, OPTIONS'); respond(405); }
    if (strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0])) !== 'application/json') respond(415);
    if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 16384) respond(413);
    $raw = file_get_contents('php://input', false, null, 0, 16385);
    if ($raw === false || strlen($raw) > 16384) respond(413);
    $data = json_decode($raw, true);
    if (!is_array($data) || !valid_inquiry($data)) respond(400);
    if (($config['enabled'] ?? false) !== true) respond(503);
    foreach (['host', 'username', 'password', 'from'] as $field) {
        if (empty($config[$field]) || !is_string($config[$field])) respond(503);
    }
    if (!filter_var($config['from'], FILTER_VALIDATE_EMAIL)) respond(503);
    $port = $config['port'] ?? 465;
    if (!in_array($port, [465, 587], true)) respond(503);
    $directory = sys_get_temp_dir() . '/seha-inquiries-' . substr(hash('sha256', __DIR__), 0, 16);
    if (!inquiry_rate_allowed($directory . '/ip', $_SERVER['REMOTE_ADDR'] ?? 'unknown', 20)
        || !inquiry_rate_allowed($directory . '/global', 'all', 100)) {
        header('Retry-After: 600'); respond(429);
    }
    require __DIR__ . '/private/vendor/phpmailer/Exception.php';
    require __DIR__ . '/private/vendor/phpmailer/SMTP.php';
    require __DIR__ . '/private/vendor/phpmailer/PHPMailer.php';
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['host'];
    $mail->Port = $port;
    $mail->SMTPAuth = true;
    $mail->Username = $config['username'];
    $mail->Password = $config['password'];
    $mail->SMTPSecure = $port === 465 ? 'ssl' : 'tls';
    $mail->Timeout = 15;
    $mail->Timelimit = 20;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($config['from'], 'Сайт СЕХА');
    // The destination is fixed; submitted fields cannot turn this into an open relay.
    $mail->addAddress('seha.info@inbox.ru');
    if (trim($data['email'] ?? '') !== '') $mail->addReplyTo(trim($data['email']), trim($data['contact']));
    $message = inquiry_message($data);
    $mail->Subject = $message['subject'];
    $mail->Body = $message['body'];
    $mail->isHTML(false);
    if (!$mail->send()) respond(502);
    respond(200, true);
} catch (Throwable $error) {
    // Never log customer fields, passwords or provider responses.
    error_log('SEHA inquiry delivery failed');
    respond(502);
}
