<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK configuration

class InnoCyberAuthenticationConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "InnoCyberAuthentication",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://innoocyber.free.nf",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "authentication" => [],
                ],
            ],
            "entity" => [
        'authentication' => [
          'fields' => [
            [
              'name' => 'email',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'message',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'new_password',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'password',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'referral_code',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'referrer',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'success',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'token',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'user',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'valid',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 10,
            ],
          ],
          'name' => 'authentication',
          'op' => [
            'create' => [
              'name' => 'create',
              'points' => [
                [
                  'method' => 'POST',
                  'orig' => '/api/auth/login',
                  'parts' => [
                    'api',
                    'auth',
                    'login',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/auth/password/recover',
                  'parts' => [
                    'api',
                    'auth',
                    'password',
                    'recover',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 1,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/auth/password/reset',
                  'parts' => [
                    'api',
                    'auth',
                    'password',
                    'reset',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 2,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/auth/referral/validate',
                  'parts' => [
                    'api',
                    'auth',
                    'referral',
                    'validate',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 3,
                ],
                [
                  'method' => 'POST',
                  'orig' => '/api/auth/signup',
                  'parts' => [
                    'api',
                    'auth',
                    'signup',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 4,
                ],
              ],
              'input' => 'data',
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return InnoCyberAuthenticationFeatures::make_feature($name);
    }
}
