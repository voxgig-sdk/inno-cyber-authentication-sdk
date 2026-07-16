<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK base feature

class InnoCyberAuthenticationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(InnoCyberAuthenticationContext $ctx, array $options): void {}
    public function PostConstruct(InnoCyberAuthenticationContext $ctx): void {}
    public function PostConstructEntity(InnoCyberAuthenticationContext $ctx): void {}
    public function SetData(InnoCyberAuthenticationContext $ctx): void {}
    public function GetData(InnoCyberAuthenticationContext $ctx): void {}
    public function GetMatch(InnoCyberAuthenticationContext $ctx): void {}
    public function SetMatch(InnoCyberAuthenticationContext $ctx): void {}
    public function PrePoint(InnoCyberAuthenticationContext $ctx): void {}
    public function PreSpec(InnoCyberAuthenticationContext $ctx): void {}
    public function PreRequest(InnoCyberAuthenticationContext $ctx): void {}
    public function PreResponse(InnoCyberAuthenticationContext $ctx): void {}
    public function PreResult(InnoCyberAuthenticationContext $ctx): void {}
    public function PreDone(InnoCyberAuthenticationContext $ctx): void {}
    public function PreUnexpected(InnoCyberAuthenticationContext $ctx): void {}
}
