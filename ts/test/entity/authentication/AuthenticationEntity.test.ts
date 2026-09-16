

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"email","name":"email","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"User email address","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"message","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"User full name","type":"`$STRING`","index$":3},{"active":true,"format":"password","name":"newPassword","req":true,"short":"New password","type":"`$STRING`","index$":4},{"active":true,"format":"password","name":"password","req":true,"short":"User password","type":"`$STRING`","index$":5},{"active":true,"name":"referralCode","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"Referral code to validate","type":"`$STRING`","index$":6},{"active":true,"name":"success","req":false,"type":"`$BOOLEAN`","index$":7},{"active":true,"name":"token","req":true,"short":"Password reset token received via email","type":"`$STRING`","index$":8}],"id":{"field":"id","name":"id"},"name":"authentication","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/auth/login","json":"{\"operationId\":\"login\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"loginExample\":{\"summary\":\"Example login request\",\"value\":{\"email\":\"user@example.com\",\"password\":\"SecurePassword123!\"}}},\"schema\":{\"properties\":{\"email\":{\"description\":\"User email address\",\"format\":\"email\",\"type\":\"string\"},\"password\":{\"description\":\"User password\",\"format\":\"password\",\"type\":\"string\"}},\"required\":[\"email\",\"password\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"success\":{\"example\":true,\"type\":\"boolean\"},\"token\":{\"description\":\"JWT access token\",\"type\":\"string\"},\"user\":{\"properties\":{\"email\":{\"format\":\"email\",\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful authentication\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid input\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Invalid credentials\"}},\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT authentication token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/auth/login","segments":[{"lit":"api"},{"lit":"auth"},{"lit":"login"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.user`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/auth/password/recover","json":"{\"operationId\":\"recoverPassword\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"recoverExample\":{\"summary\":\"Example password recovery request\",\"value\":{\"email\":\"user@example.com\"}}},\"schema\":{\"properties\":{\"email\":{\"description\":\"Email address for password recovery\",\"format\":\"email\",\"type\":\"string\"}},\"required\":[\"email\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"example\":\"Password recovery email sent successfully\",\"type\":\"string\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Password recovery email sent\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid email format\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Email not found\"}},\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT authentication token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/auth/password/recover","segments":[{"lit":"api"},{"lit":"auth"},{"lit":"password"},{"lit":"recover"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{},"contract":{"id":"POST /api/auth/password/reset","json":"{\"operationId\":\"resetPassword\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"resetExample\":{\"summary\":\"Example password reset request\",\"value\":{\"newPassword\":\"NewSecurePassword123!\",\"token\":\"abc123def456ghi789\"}}},\"schema\":{\"properties\":{\"newPassword\":{\"description\":\"New password\",\"format\":\"password\",\"minLength\":8,\"type\":\"string\"},\"token\":{\"description\":\"Password reset token received via email\",\"type\":\"string\"}},\"required\":[\"token\",\"newPassword\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"example\":\"Password reset successfully\",\"type\":\"string\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Password successfully reset\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid or expired token\"}},\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT authentication token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/auth/password/reset","segments":[{"lit":"api"},{"lit":"auth"},{"lit":"password"},{"lit":"reset"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{},"contract":{"id":"POST /api/auth/referral/validate","json":"{\"operationId\":\"validateReferralCode\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"validateExample\":{\"summary\":\"Example referral code validation\",\"value\":{\"referralCode\":\"REF12345\"}}},\"schema\":{\"properties\":{\"referralCode\":{\"description\":\"Referral code to validate\",\"type\":\"string\"}},\"required\":[\"referralCode\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"referrer\":{\"properties\":{\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"},\"valid\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Referral code is valid\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Referral code not found\"}},\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT authentication token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/auth/referral/validate","segments":[{"lit":"api"},{"lit":"auth"},{"lit":"referral"},{"lit":"validate"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.referrer`"},"index$":3},{"active":true,"args":{},"contract":{"id":"POST /api/auth/signup","json":"{\"operationId\":\"signup\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"signupExample\":{\"summary\":\"Example signup request\",\"value\":{\"email\":\"john.doe@example.com\",\"name\":\"John Doe\",\"password\":\"SecurePassword123!\",\"referralCode\":\"REF12345\"}}},\"schema\":{\"properties\":{\"email\":{\"description\":\"User email address\",\"format\":\"email\",\"type\":\"string\"},\"name\":{\"description\":\"User full name\",\"type\":\"string\"},\"password\":{\"description\":\"User password\",\"format\":\"password\",\"minLength\":8,\"type\":\"string\"},\"referralCode\":{\"description\":\"Optional referral code\",\"type\":\"string\"}},\"required\":[\"email\",\"password\",\"name\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"example\":\"User registered successfully\",\"type\":\"string\"},\"success\":{\"example\":true,\"type\":\"boolean\"},\"token\":{\"description\":\"JWT access token\",\"type\":\"string\"},\"user\":{\"properties\":{\"email\":{\"format\":\"email\",\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"User successfully created\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid input or user already exists\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Conflict - Email already registered\"}},\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"JWT\",\"description\":\"JWT authentication token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/auth/signup","segments":[{"lit":"api"},{"lit":"auth"},{"lit":"signup"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.user`"},"index$":4}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"authentication","name__orig":"authentication","Name":"Authentication","name_":"authentication","name-":"authentication","NAME":"AUTHENTICATION","index$":0}, {"active":true,"entity":"authentication","key$":"BasicAuthenticationFlow","kind":"basic","name":"BasicAuthenticationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"authentication_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Authentication')
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
  
