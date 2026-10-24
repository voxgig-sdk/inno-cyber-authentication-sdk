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
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
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
                "now": "`$FUNCTION`",
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
                    "name": "email",
                    "title": "Email",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "User email address",
                    "format": "email"
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "User full name"
                },
                {
                    "name": "newPassword",
                    "title": "New Password",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "New password",
                    "format": "password"
                },
                {
                    "name": "password",
                    "title": "Password",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "User password",
                    "format": "password"
                },
                {
                    "name": "referralCode",
                    "title": "Referral Code",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "create": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Referral code to validate"
                },
                {
                    "name": "referrer",
                    "title": "Referrer",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "token",
                    "title": "Token",
                    "type": "`$STRING`",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "JWT access token"
                },
                {
                    "name": "user",
                    "title": "User",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "valid",
                    "title": "Valid",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "authentication",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
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
                            "parts": [
                                "api",
                                "auth",
                                "login"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
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
                            "parts": [
                                "api",
                                "auth",
                                "password",
                                "recover"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
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
                            "parts": [
                                "api",
                                "auth",
                                "password",
                                "reset"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
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
                            "parts": [
                                "api",
                                "auth",
                                "referral",
                                "validate"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
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
                            "parts": [
                                "api",
                                "auth",
                                "signup"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
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