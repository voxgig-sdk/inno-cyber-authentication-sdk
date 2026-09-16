"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'InnoCyberAuthentication',
        slug: "inno-cyber-authentication",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://innoocyber.free.nf",
        auth: {
            prefix: 'Bearer',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            authentication: {},
        }
    };
    entity = {
        "authentication": {
            "fields": [
                {
                    "format": "email",
                    "name": "email",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "User email address",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "message",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "User full name",
                    "type": "`$STRING`"
                },
                {
                    "format": "password",
                    "name": "newPassword",
                    "req": true,
                    "short": "New password",
                    "type": "`$STRING`"
                },
                {
                    "format": "password",
                    "name": "password",
                    "req": true,
                    "short": "User password",
                    "type": "`$STRING`"
                },
                {
                    "name": "referralCode",
                    "op": {
                        "create": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "Referral code to validate",
                    "type": "`$STRING`"
                },
                {
                    "name": "success",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "token",
                    "req": true,
                    "short": "Password reset token received via email",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "auth"
                                },
                                {
                                    "lit": "login"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.user`"
                            },
                            "parts": [
                                "api",
                                "auth",
                                "login"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/auth/password/recover",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "auth"
                                },
                                {
                                    "lit": "password"
                                },
                                {
                                    "lit": "recover"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "auth",
                                "password",
                                "recover"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/auth/password/reset",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "auth"
                                },
                                {
                                    "lit": "password"
                                },
                                {
                                    "lit": "reset"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "auth",
                                "password",
                                "reset"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/auth/referral/validate",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "auth"
                                },
                                {
                                    "lit": "referral"
                                },
                                {
                                    "lit": "validate"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.referrer`"
                            },
                            "parts": [
                                "api",
                                "auth",
                                "referral",
                                "validate"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/auth/signup",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "auth"
                                },
                                {
                                    "lit": "signup"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.user`"
                            },
                            "parts": [
                                "api",
                                "auth",
                                "signup"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map