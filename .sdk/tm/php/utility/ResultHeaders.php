<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK utility: result_headers

class InnoCyberAuthenticationResultHeaders
{
    public static function call(InnoCyberAuthenticationContext $ctx): ?InnoCyberAuthenticationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
