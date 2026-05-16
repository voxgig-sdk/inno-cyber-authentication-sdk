
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { InnoCyberAuthenticationSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await InnoCyberAuthenticationSDK.test()
    equal(null !== testsdk, true)
  })

})
