<?php
declare(strict_types=1);
require __DIR__ . '/inquiry-core.php';

function check(bool $condition, string $message): void {
    if (!$condition) throw new RuntimeException($message);
}
$general = ['type' => 'general', 'locale' => 'ru', 'company' => 'Компания', 'contact' => 'Анна',
    'email' => 'buyer@example.com', 'phone' => '+7 999 123-45-67', 'consent' => true, 'comment' => 'Нужен каталог'];
check(valid_inquiry($general), 'General inquiry must not require a product');
check(valid_inquiry([...$general, 'email' => '']), 'General inquiry can use the required phone');
check(!valid_inquiry([...$general, 'consent' => false]), 'Consent is mandatory');
check(!valid_inquiry([...$general, 'email' => "a@example.com\r\nBcc: spam@example.com"]), 'Reject header injection');
check(!valid_inquiry([...$general, 'website' => 'spam']), 'Reject honeypot');
$product = [...$general, 'type' => 'product', 'product' => 'Кокосовые чипсы', 'productId' => 'coconut-chips',
    'quantity' => '12.5', 'quantityUnit' => 'kg', 'packaging' => '5 кг', 'supplyFormat' => 'industrial'];
check(valid_inquiry($product), 'Product inquiry accepts the selection');
check(valid_inquiry([...$product, 'quantity' => '', 'quantityUnit' => '']), 'Category inquiry may omit quantity');
check(!valid_inquiry([...$product, 'quantity' => '-1']), 'Reject negative quantity');
check(!valid_inquiry([...$product, 'quantityUnit' => 'pcs']), 'Reject fractional pieces');
check(!valid_inquiry([...$product, 'productId' => '']), 'Product ID is required');
check(!valid_inquiry([...$product, 'email' => '']), 'Product inquiry requires email');
$message = inquiry_message($product);
check(str_contains($message['subject'], 'Кокосовые чипсы'), 'Product in subject');
check(str_contains($message['body'], '12.5 кг') && str_contains($message['body'], '5 кг'), 'Preserve quantity and pack size');
check(inquiry_message($general)['subject'] !== $message['subject'], 'Distinct subjects');
$directory = sys_get_temp_dir() . '/seha-inquiry-test-' . bin2hex(random_bytes(8));
try {
    check(inquiry_rate_allowed($directory, 'test', 1), 'First request accepted');
    check(!inquiry_rate_allowed($directory, 'test', 1), 'Rate limit enforced');
} finally {
    foreach (glob($directory . '/*') ?: [] as $file) unlink($file);
    if (is_dir($directory)) rmdir($directory);
}
echo "PHP inquiry validation, message and rate-limit checks passed. No email sent.\n";
