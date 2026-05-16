<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class InnoCyberAuthenticationMakeContext
{
    public static function call(array $ctxmap, ?InnoCyberAuthenticationContext $basectx): InnoCyberAuthenticationContext
    {
        return new InnoCyberAuthenticationContext($ctxmap, $basectx);
    }
}
