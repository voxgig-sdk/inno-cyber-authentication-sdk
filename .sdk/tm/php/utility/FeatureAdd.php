<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK utility: feature_add

class InnoCyberAuthenticationFeatureAdd
{
    public static function call(InnoCyberAuthenticationContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
