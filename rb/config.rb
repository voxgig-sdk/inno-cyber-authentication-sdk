# InnoCyberAuthentication SDK configuration

module InnoCyberAuthenticationConfig
  def self.make_config
    {
      "main" => {
        "name" => "InnoCyberAuthentication",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "active" => true,
              "name" => "email",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "message",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "name",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "new_password",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "password",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "referral_code",
              "op" => {
                "create" => {
                  "req" => false,
                  "type" => "`$STRING`",
                },
              },
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "referrer",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "success",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "token",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "user",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "valid",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 10,
            },
          ],
          "name" => "authentication",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/auth/login",
                  "parts" => [
                    "api",
                    "auth",
                    "login",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/auth/password/recover",
                  "parts" => [
                    "api",
                    "auth",
                    "password",
                    "recover",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 1,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/auth/password/reset",
                  "parts" => [
                    "api",
                    "auth",
                    "password",
                    "reset",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 2,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/auth/referral/validate",
                  "parts" => [
                    "api",
                    "auth",
                    "referral",
                    "validate",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 3,
                },
                {
                  "active" => true,
                  "args" => {},
                  "method" => "POST",
                  "orig" => "/api/auth/signup",
                  "parts" => [
                    "api",
                    "auth",
                    "signup",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 4,
                },
              ],
              "key$" => "create",
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
