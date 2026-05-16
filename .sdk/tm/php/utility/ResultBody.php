<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK utility: result_body

class InnoCyberAuthenticationResultBody
{
    public static function call(InnoCyberAuthenticationContext $ctx): ?InnoCyberAuthenticationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
