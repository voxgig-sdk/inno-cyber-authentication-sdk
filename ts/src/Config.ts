
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://innoocyber.free.nf',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      authentication: {
      },

    }
  }


  entity = {
    "authentication": {
      "fields": [
        {
          "name": "email",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "message",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "new_password",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "password",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "referral_code",
          "op": {
            "create": {
              "req": false,
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "referrer",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 6
        },
        {
          "name": "success",
          "req": false,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 7
        },
        {
          "name": "token",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        },
        {
          "name": "user",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 9
        },
        {
          "name": "valid",
          "req": false,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 10
        }
      ],
      "name": "authentication",
      "op": {
        "create": {
          "name": "create",
          "points": [
            {
              "method": "POST",
              "orig": "/api/auth/login",
              "parts": [
                "api",
                "auth",
                "login"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            },
            {
              "method": "POST",
              "orig": "/api/auth/password/recover",
              "parts": [
                "api",
                "auth",
                "password",
                "recover"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 1
            },
            {
              "method": "POST",
              "orig": "/api/auth/password/reset",
              "parts": [
                "api",
                "auth",
                "password",
                "reset"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 2
            },
            {
              "method": "POST",
              "orig": "/api/auth/referral/validate",
              "parts": [
                "api",
                "auth",
                "referral",
                "validate"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 3
            },
            {
              "method": "POST",
              "orig": "/api/auth/signup",
              "parts": [
                "api",
                "auth",
                "signup"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 4
            }
          ],
          "input": "data",
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

