<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK exists test

require_once __DIR__ . '/../innocyberauthentication_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = InnoCyberAuthenticationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
