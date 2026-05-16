<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK utility: prepare_headers

class InnoCyberAuthenticationPrepareHeaders
{
    public static function call(InnoCyberAuthenticationContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
