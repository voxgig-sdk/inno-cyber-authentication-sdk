
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { InnoCyberAuthenticationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = InnoCyberAuthenticationSDK.test()
    equal(testsdk instanceof InnoCyberAuthenticationSDK, true,
      'InnoCyberAuthenticationSDK.test() must return a client synchronously')
  })

})
