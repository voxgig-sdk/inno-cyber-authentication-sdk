package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "InnoCyberAuthentication",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://innoocyber.free.nf",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"authentication": map[string]any{},
			},
		},
		"entity": map[string]any{
			"authentication": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "message",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "new_password",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "password",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "referral_code",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "referrer",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "success",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "token",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "user",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "valid",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 10,
					},
				},
				"name": "authentication",
				"op": map[string]any{
					"create": map[string]any{
						"name": "create",
						"points": []any{
							map[string]any{
								"method": "POST",
								"orig": "/api/auth/login",
								"parts": []any{
									"api",
									"auth",
									"login",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
							map[string]any{
								"method": "POST",
								"orig": "/api/auth/password/recover",
								"parts": []any{
									"api",
									"auth",
									"password",
									"recover",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 1,
							},
							map[string]any{
								"method": "POST",
								"orig": "/api/auth/password/reset",
								"parts": []any{
									"api",
									"auth",
									"password",
									"reset",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 2,
							},
							map[string]any{
								"method": "POST",
								"orig": "/api/auth/referral/validate",
								"parts": []any{
									"api",
									"auth",
									"referral",
									"validate",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 3,
							},
							map[string]any{
								"method": "POST",
								"orig": "/api/auth/signup",
								"parts": []any{
									"api",
									"auth",
									"signup",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 4,
							},
						},
						"input": "data",
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
