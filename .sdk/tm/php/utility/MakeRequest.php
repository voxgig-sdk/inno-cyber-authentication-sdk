<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK utility: make_request

require_once __DIR__ . '/../core/Response.php';
require_once __DIR__ . '/../core/Result.php';

class InnoCyberAuthenticationMakeRequest
{
    public static function call(InnoCyberAuthenticationContext $ctx): array
    {
        if (isset($ctx->out['request'])) {
            return [$ctx->out['request'], null];
        }

        $spec = $ctx->spec;
        $utility = $ctx->utility;
        $response = new InnoCyberAuthenticationResponse([]);
        $result = new InnoCyberAuthenticationResult([]);
        $ctx->result = $result;

        if (!$spec) {
            return [null, $ctx->make_error('request_no_spec', 'Expected context spec property to be defined.')];
        }

        [$fetchdef, $err] = ($utility->make_fetch_def)($ctx);
        if ($err) {
            $response->err = $err;
            $ctx->response = $response;
            $spec->step = 'postrequest';
            return [$response, null];
        }

        if ($ctx->ctrl->explain) {
            $ctx->ctrl->explain['fetchdef'] = $fetchdef;
        }

        $spec->step = 'prerequest';
        $url = $fetchdef['url'] ?? '';
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            $response->err = $fetch_err;
        } elseif ($fetched === null) {
            $response = new InnoCyberAuthenticationResponse(['err' => $ctx->make_error('request_no_response', 'response: undefined')]);
        } elseif (is_array($fetched)) {
            $response = new InnoCyberAuthenticationResponse($fetched);
        } else {
            $response->err = $ctx->make_error('request_invalid_response', 'response: invalid type');
        }

        $spec->step = 'postrequest';
        $ctx->response = $response;
        return [$response, null];
    }
}
