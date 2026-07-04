<?php
declare(strict_types=1);

// Typed models for the InnoCyberAuthentication SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Authentication entity data model. */
class Authentication
{
    public string $email;
    public ?string $message = null;
    public string $name;
    public string $new_password;
    public string $password;
    public string $referral_code;
    public ?array $referrer = null;
    public ?bool $success = null;
    public ?string $token = null;
    public ?array $user = null;
    public ?bool $valid = null;
}

/** Match filter for Authentication#create (any subset of Authentication fields). */
class AuthenticationCreateData
{
    public ?string $email = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?string $new_password = null;
    public ?string $password = null;
    public ?string $referral_code = null;
    public ?array $referrer = null;
    public ?bool $success = null;
    public ?string $token = null;
    public ?array $user = null;
    public ?bool $valid = null;
}

