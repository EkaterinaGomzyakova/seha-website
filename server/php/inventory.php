<?php
declare(strict_types=1);
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    header('Allow: GET'); http_response_code(405); echo '{"status":"error"}'; exit;
}
try {
    $cache = __DIR__ . '/private/inventory-cache.json';
    if (is_file($cache) && filemtime($cache) > time() - 60) {
        header('Cache-Control: public, max-age=30'); readfile($cache); exit;
    }
    // The source is generated from the public inventory configuration during deployment.
    // No browser headers, cookies, IP addresses or inquiry data are forwarded to Google.
    $source = json_decode(file_get_contents(__DIR__ . '/private/inventory-source.json'), true);
    if (!is_array($source) || !preg_match('/^[a-zA-Z0-9_-]+$/', $source['spreadsheetId'] ?? '')) throw new RuntimeException('Source unavailable');
    $url = 'https://docs.google.com/spreadsheets/d/' . $source['spreadsheetId'] . '/gviz/tq?' . http_build_query([
        'gid' => $source['sheetId'], 'range' => $source['range'], 'headers' => '1',
        'tq' => 'select ' . implode(',', $source['columns']), 'tqx' => 'out:json'
    ]);
    $context = stream_context_create(['http' => ['timeout' => 8, 'header' => "User-Agent: SEHA-Inventory/1.0\r\n", 'follow_location' => 0],
        'ssl' => ['verify_peer' => true, 'verify_peer_name' => true]]);
    $raw = file_get_contents($url, false, $context, 0, 1048577);
    if (!is_string($raw) || strlen($raw) > 1048576
        || !preg_match('/google\.visualization\.Query\.setResponse\((.*)\);?\s*$/s', $raw, $match)) throw new RuntimeException('Source response invalid');
    $data = json_decode($match[1], true);
    if (!is_array($data) || ($data['status'] ?? '') !== 'ok' || !is_array($data['table']['rows'] ?? null)) throw new RuntimeException('Source data invalid');
    $output = json_encode(['status' => 'ok', 'table' => $data['table']], JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
    $temporary = $cache . '.' . bin2hex(random_bytes(8));
    if (file_put_contents($temporary, $output, LOCK_EX) !== false) {
        if (!rename($temporary, $cache)) unlink($temporary);
    }
    header('Cache-Control: public, max-age=30'); echo $output;
} catch (Throwable $error) {
    header('Cache-Control: no-store'); http_response_code(503); echo '{"status":"error"}';
}
