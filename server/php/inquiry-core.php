<?php
declare(strict_types=1);

function valid_inquiry(array $data): bool
{
    if (!in_array($data['type'] ?? null, ['general', 'product'], true)
        || !in_array($data['locale'] ?? null, ['ru', 'en'], true)
        || ($data['consent'] ?? null) !== true || !empty($data['website'])) {
        return false;
    }
    foreach (['company' => 160, 'contact' => 120, 'email' => 254, 'phone' => 40,
        'product' => 200, 'productId' => 100, 'packaging' => 160, 'packagingId' => 80,
        'customPackaging' => 80, 'quantity' => 100, 'quantityUnit' => 10, 'business' => 80] as $key => $limit) {
        $value = $data[$key] ?? '';
        if (!is_string($value) || strlen($value) > $limit * 4 || preg_match('/[\r\n\x00]/', $value)) {
            return false;
        }
    }
    foreach (['company', 'contact'] as $key) {
        if (trim($data[$key] ?? '') === '') return false;
    }
    $email = trim($data['email'] ?? '');
    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) return false;
    $phone = trim($data['phone'] ?? '');
    if ($phone !== '' && !preg_match('/^\+?[0-9\s().-]{7,40}$/', $phone)) return false;
    $digits = preg_replace('/\D/', '', $phone);
    if ($phone !== '' && (strlen($digits) < 7 || strlen($digits) > 15)) return false;
    if ($data['type'] === 'general' && $phone === '') return false;
    if ($data['type'] === 'product') {
        if ($email === '' || trim($data['product'] ?? '') === ''
            || !preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $data['productId'] ?? '')) return false;
        $unit = $data['quantityUnit'] ?? '';
        $quantity = $data['quantity'] ?? '';
        if (($unit !== '' || $quantity !== '') && (!in_array($unit, ['packs', 'pcs', 'kg', 'm2'], true)
            || !preg_match('/^\d+(\.\d{1,2})?$/', $quantity)
            || (float)$quantity <= 0 || (float)$quantity > 999999999
            || (in_array($unit, ['packs', 'pcs'], true) && floor((float)$quantity) !== (float)$quantity))) return false;
    }
    if (isset($data['supplyFormat']) && !in_array($data['supplyFormat'], ['consumer', 'industrial'], true)) return false;
    return !isset($data['comment']) || (is_string($data['comment'])
        && strlen($data['comment']) <= 6000 && !str_contains($data['comment'], "\0"));
}

function inquiry_message(array $data): array
{
    $product = $data['type'] === 'product';
    $lines = [
        $product ? 'Заявка из карточки товара' : 'Общая заявка с сайта',
        'Язык сайта: ' . $data['locale'],
        'Компания: ' . trim($data['company']),
        'Имя: ' . trim($data['contact']),
        'Email: ' . trim($data['email'] ?? ''),
        'Телефон: ' . trim($data['phone'] ?? ''),
        'Продукт: ' . trim($data['product'] ?? ''),
    ];
    if ($product) {
        $units = ['packs' => 'упаковок', 'pcs' => 'шт.', 'kg' => 'кг', 'm2' => 'м²'];
        $formats = ['consumer' => 'Потребительская упаковка', 'industrial' => 'Промышленная фасовка'];
        $lines[] = 'Код продукта: ' . $data['productId'];
        $lines[] = 'Формат поставки: ' . ($formats[$data['supplyFormat'] ?? ''] ?? 'По согласованию');
        $lines[] = 'Фасовка: ' . ($data['packaging'] ?? '');
        $lines[] = 'Количество: ' . (empty($data['quantity']) ? 'Не указано' : $data['quantity'] . ' ' . $units[$data['quantityUnit']]);
    } else {
        $lines[] = 'Направление бизнеса: ' . ($data['business'] ?? 'Не указано');
    }
    $lines[] = '';
    $lines[] = 'Сообщение: ' . ($data['comment'] ?? '');
    $lines[] = '';
    $lines[] = 'Согласие на обработку персональных данных получено.';
    return [
        'subject' => $product ? 'СЕХА — запрос цены: ' . trim($data['product']) : 'СЕХА — общая заявка',
        'body' => implode("\n", $lines),
    ];
}

/** Locked counters contain no submitted customer data. Failure closes the endpoint. */
function inquiry_rate_allowed(string $directory, string $key, int $limit): bool
{
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) return false;
    // Fixed buckets bound the number of files even when many source addresses are used.
    $bucket = hexdec(substr(hash('sha256', $key), 0, 3));
    $file = fopen($directory . '/' . $bucket . '.json', 'c+');
    if (!$file) return false;
    try {
        if (!flock($file, LOCK_EX)) return false;
        $state = json_decode(stream_get_contents($file), true);
        if (!is_array($state) || ($state['until'] ?? 0) <= time()) $state = ['count' => 0, 'until' => time() + 600];
        if ($state['count'] >= $limit) return false;
        $state['count']++;
        rewind($file);
        ftruncate($file, 0);
        return fwrite($file, json_encode($state)) !== false;
    } finally {
        flock($file, LOCK_UN);
        fclose($file);
    }
}
