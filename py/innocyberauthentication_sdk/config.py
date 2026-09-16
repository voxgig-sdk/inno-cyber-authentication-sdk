# InnoCyberAuthentication SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "InnoCyberAuthentication",
            "slug": "inno-cyber-authentication",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://innoocyber.free.nf",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "authentication": {},
            },
        },
        "entity": {
      "authentication": {
        "fields": [
          {
            "format": "email",
            "name": "email",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "User email address",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "User full name",
            "type": "`$STRING`",
          },
          {
            "format": "password",
            "name": "newPassword",
            "req": True,
            "short": "New password",
            "type": "`$STRING`",
          },
          {
            "format": "password",
            "name": "password",
            "req": True,
            "short": "User password",
            "type": "`$STRING`",
          },
          {
            "name": "referralCode",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "Referral code to validate",
            "type": "`$STRING`",
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "token",
            "req": True,
            "short": "Password reset token received via email",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "authentication",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/auth/login",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "auth",
                  },
                  {
                    "lit": "login",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.user`",
                },
                "parts": [
                  "api",
                  "auth",
                  "login",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/auth/password/recover",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "auth",
                  },
                  {
                    "lit": "password",
                  },
                  {
                    "lit": "recover",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "auth",
                  "password",
                  "recover",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/auth/password/reset",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "auth",
                  },
                  {
                    "lit": "password",
                  },
                  {
                    "lit": "reset",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "auth",
                  "password",
                  "reset",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/auth/referral/validate",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "auth",
                  },
                  {
                    "lit": "referral",
                  },
                  {
                    "lit": "validate",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.referrer`",
                },
                "parts": [
                  "api",
                  "auth",
                  "referral",
                  "validate",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/auth/signup",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "auth",
                  },
                  {
                    "lit": "signup",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.user`",
                },
                "parts": [
                  "api",
                  "auth",
                  "signup",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
