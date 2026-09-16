# InnoCyberAuthentication SDK configuration

module InnoCyberAuthenticationConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "InnoCyberAuthentication",
        "slug" => "inno-cyber-authentication",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://innoocyber.free.nf",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "authentication" => {},
        },
      },
      "entity" => {
        "authentication" => {
          "fields" => [
            {
              "format" => "email",
              "name" => "email",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "short" => "User email address",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "message",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "short" => "User full name",
              "type" => "`$STRING`",
            },
            {
              "format" => "password",
              "name" => "newPassword",
              "req" => true,
              "short" => "New password",
              "type" => "`$STRING`",
            },
            {
              "format" => "password",
              "name" => "password",
              "req" => true,
              "short" => "User password",
              "type" => "`$STRING`",
            },
            {
              "name" => "referralCode",
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "short" => "Referral code to validate",
              "type" => "`$STRING`",
            },
            {
              "name" => "success",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "token",
              "req" => true,
              "short" => "Password reset token received via email",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "authentication",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/auth/login",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "auth",
                    },
                    {
                      "lit" => "login",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.user`",
                  },
                  "parts" => [
                    "api",
                    "auth",
                    "login",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/auth/password/recover",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "auth",
                    },
                    {
                      "lit" => "password",
                    },
                    {
                      "lit" => "recover",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "auth",
                    "password",
                    "recover",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/auth/password/reset",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "auth",
                    },
                    {
                      "lit" => "password",
                    },
                    {
                      "lit" => "reset",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "auth",
                    "password",
                    "reset",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/auth/referral/validate",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "auth",
                    },
                    {
                      "lit" => "referral",
                    },
                    {
                      "lit" => "validate",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.referrer`",
                  },
                  "parts" => [
                    "api",
                    "auth",
                    "referral",
                    "validate",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/auth/signup",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "auth",
                    },
                    {
                      "lit" => "signup",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.user`",
                  },
                  "parts" => [
                    "api",
                    "auth",
                    "signup",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    InnoCyberAuthenticationFeatures.make_feature(name)
  end
end
