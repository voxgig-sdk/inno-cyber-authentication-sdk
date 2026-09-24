

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { InnoCyberAuthenticationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AuthenticationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INNO_CYBER_AUTHENTICATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('INNO_CYBER_AUTHENTICATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = InnoCyberAuthenticationSDK.test()
    const ent = testsdk.Authentication()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INNO_CYBER_AUTHENTICATION_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'authentication.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"fo":"email","h":"Email","n":"email","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"User email address","t":"`$STRING`","key$":"email","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"User full name","t":"`$STRING`","key$":"name","index$":3},"newPassword":{"a":true,"fo":"password","h":"New Password","n":"newPassword","r":true,"sh":"New password","t":"`$STRING`","key$":"newPassword","index$":4},"password":{"a":true,"fo":"password","h":"Password","n":"password","r":true,"sh":"User password","t":"`$STRING`","key$":"password","index$":5},"referralCode":{"a":true,"h":"Referral Code","n":"referralCode","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Referral code to validate","t":"`$STRING`","key$":"referralCode","index$":6},"success":{"a":true,"h":"Success","n":"success","r":false,"t":"`$BOOLEAN`","key$":"success","index$":7},"token":{"a":true,"h":"Token","n":"token","r":true,"sh":"Password reset token received via email","t":"`$STRING`","key$":"token","index$":8}},"id":{"field":"id","name":"id"},"name":"authentication","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/auth/login","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/auth/login","q":{},"r":{},"s":[{"lit":"api"},{"lit":"auth"},{"lit":"login"}],"t":{"req":"`reqdata`","res":"`body.user`"},"index$":0},{"a":true,"co":{"id":"POST /api/auth/password/recover","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/auth/password/recover","q":{},"r":{},"s":[{"lit":"api"},{"lit":"auth"},{"lit":"password"},{"lit":"recover"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /api/auth/password/reset","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/auth/password/reset","q":{},"r":{},"s":[{"lit":"api"},{"lit":"auth"},{"lit":"password"},{"lit":"reset"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /api/auth/referral/validate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/auth/referral/validate","q":{},"r":{},"s":[{"lit":"api"},{"lit":"auth"},{"lit":"referral"},{"lit":"validate"}],"t":{"req":"`reqdata`","res":"`body.referrer`"},"index$":3},{"a":true,"co":{"id":"POST /api/auth/signup","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/auth/signup","q":{},"r":{},"s":[{"lit":"api"},{"lit":"auth"},{"lit":"signup"}],"t":{"req":"`reqdata`","res":"`body.user`"},"index$":4}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"authentication","name__orig":"authentication","Name":"Authentication","name_":"authentication","name-":"authentication","NAME":"AUTHENTICATION","index$":0}, {"active":true,"entity":"authentication","key$":"BasicAuthenticationFlow","kind":"basic","name":"BasicAuthenticationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"authentication_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Authentication', {"POST /api/auth/login":{"protocol":"http","operationId":"login","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","password"],"properties":{"email":{"type":"string","format":"email","description":"User email address","key$":"email"},"password":{"type":"string","format":"password","description":"User password","key$":"password"}},"index$":1},"examples":{"loginExample":{"summary":"Example login request","value":{"email":"user@example.com","password":"SecurePassword123!"}}}}}},"responses":{"200":{"description":"Successful authentication","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":true},"token":{"type":"string","description":"JWT access token"},"user":{"type":"object","properties":{"id":{"type":"string","key$":"id"},"email":{"type":"string","format":"email","key$":"email"},"name":{"type":"string","key$":"name"}},"index$":0}}}}}},"400":{"description":"Bad request - Invalid input","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}},"401":{"description":"Invalid credentials","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT authentication token"}}},"POST /api/auth/password/recover":{"protocol":"http","operationId":"recoverPassword","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email"],"properties":{"email":{"type":"string","format":"email","description":"Email address for password recovery","key$":"email"}},"index$":1},"examples":{"recoverExample":{"summary":"Example password recovery request","value":{"email":"user@example.com"}}}}}},"responses":{"200":{"description":"Password recovery email sent","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":true,"key$":"success"},"message":{"type":"string","example":"Password recovery email sent successfully","key$":"message"}},"index$":0}}}},"400":{"description":"Bad request - Invalid email format","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}},"404":{"description":"Email not found","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT authentication token"}}},"POST /api/auth/password/reset":{"protocol":"http","operationId":"resetPassword","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["token","newPassword"],"properties":{"token":{"type":"string","description":"Password reset token received via email","key$":"token"},"newPassword":{"type":"string","format":"password","description":"New password","minLength":8,"key$":"newPassword"}},"index$":1},"examples":{"resetExample":{"summary":"Example password reset request","value":{"token":"abc123def456ghi789","newPassword":"NewSecurePassword123!"}}}}}},"responses":{"200":{"description":"Password successfully reset","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":true,"key$":"success"},"message":{"type":"string","example":"Password reset successfully","key$":"message"}},"index$":0}}}},"400":{"description":"Bad request - Invalid or expired token","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT authentication token"}}},"POST /api/auth/referral/validate":{"protocol":"http","operationId":"validateReferralCode","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["referralCode"],"properties":{"referralCode":{"type":"string","description":"Referral code to validate","key$":"referralCode"}},"index$":1},"examples":{"validateExample":{"summary":"Example referral code validation","value":{"referralCode":"REF12345"}}}}}},"responses":{"200":{"description":"Referral code is valid","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":true},"valid":{"type":"boolean","example":true},"referrer":{"type":"object","properties":{"name":{"type":"string","key$":"name"}},"index$":0}}}}}},"404":{"description":"Referral code not found","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT authentication token"}}},"POST /api/auth/signup":{"protocol":"http","operationId":"signup","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","password","name"],"properties":{"name":{"type":"string","description":"User full name","key$":"name"},"email":{"type":"string","format":"email","description":"User email address","key$":"email"},"password":{"type":"string","format":"password","description":"User password","minLength":8,"key$":"password"},"referralCode":{"type":"string","description":"Optional referral code","key$":"referralCode"}},"index$":1},"examples":{"signupExample":{"summary":"Example signup request","value":{"name":"John Doe","email":"john.doe@example.com","password":"SecurePassword123!","referralCode":"REF12345"}}}}}},"responses":{"201":{"description":"User successfully created","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":true},"message":{"type":"string","example":"User registered successfully"},"token":{"type":"string","description":"JWT access token"},"user":{"type":"object","properties":{"id":{"type":"string"},"email":{"type":"string","format":"email"},"name":{"type":"string"}}}}}}}},"400":{"description":"Bad request - Invalid input or user already exists","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}},"409":{"description":"Conflict - Email already registered","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[],"securitySource":"unspecified","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"JWT","description":"JWT authentication token"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const authentication_ref01_ent = client.Authentication()
    let authentication_ref01_data = setup.data.new.authentication['authentication_ref01']

    authentication_ref01_data = (await authentication_ref01_ent.create(authentication_ref01_data)).data()
    assert(null != authentication_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/authentication/AuthenticationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = InnoCyberAuthenticationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['authentication01','authentication02','authentication03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INNO_CYBER_AUTHENTICATION_TEST_AUTHENTICATION_ENTID': idmap,
    'INNO_CYBER_AUTHENTICATION_TEST_LIVE': 'FALSE',
    'INNO_CYBER_AUTHENTICATION_TEST_EXPLAIN': 'FALSE',
    'INNO_CYBER_AUTHENTICATION_APIKEY': '',
  })

  idmap = env['INNO_CYBER_AUTHENTICATION_TEST_AUTHENTICATION_ENTID']

  const live = 'TRUE' === env.INNO_CYBER_AUTHENTICATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INNO_CYBER_AUTHENTICATION_TEST_AUTHENTICATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new InnoCyberAuthenticationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.INNO_CYBER_AUTHENTICATION_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.INNO_CYBER_AUTHENTICATION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
