-- InnoCyberAuthentication SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "InnoCyberAuthentication",
      slug = "inno-cyber-authentication",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://innoocyber.free.nf",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["authentication"] = {},
      },
    },
    entity = {
      ["authentication"] = {
        ["fields"] = {
          {
            ["format"] = "email",
            ["name"] = "email",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "User email address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "User full name",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "password",
            ["name"] = "newPassword",
            ["req"] = true,
            ["short"] = "New password",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "password",
            ["name"] = "password",
            ["req"] = true,
            ["short"] = "User password",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "referralCode",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "Referral code to validate",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "success",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "token",
            ["req"] = true,
            ["short"] = "Password reset token received via email",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "authentication",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/auth/login",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "auth",
                  },
                  {
                    ["lit"] = "login",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.user`",
                },
                ["parts"] = {
                  "api",
                  "auth",
                  "login",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/auth/password/recover",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "auth",
                  },
                  {
                    ["lit"] = "password",
                  },
                  {
                    ["lit"] = "recover",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "auth",
                  "password",
                  "recover",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/auth/password/reset",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "auth",
                  },
                  {
                    ["lit"] = "password",
                  },
                  {
                    ["lit"] = "reset",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "auth",
                  "password",
                  "reset",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/auth/referral/validate",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "auth",
                  },
                  {
                    ["lit"] = "referral",
                  },
                  {
                    ["lit"] = "validate",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.referrer`",
                },
                ["parts"] = {
                  "api",
                  "auth",
                  "referral",
                  "validate",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/auth/signup",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "auth",
                  },
                  {
                    ["lit"] = "signup",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.user`",
                },
                ["parts"] = {
                  "api",
                  "auth",
                  "signup",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
