<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class InnoCyberAuthenticationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new InnoCyberAuthenticationBaseFeature();
            case "test":
                return new InnoCyberAuthenticationTestFeature();
            default:
                return new InnoCyberAuthenticationBaseFeature();
        }
    }
}
