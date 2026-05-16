<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK utility: prepare_body

class InnoCyberAuthenticationPrepareBody
{
    public static function call(InnoCyberAuthenticationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
