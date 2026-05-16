
import { Context } from './Context'


class InnoCyberAuthenticationError extends Error {

  isInnoCyberAuthenticationError = true

  sdk = 'InnoCyberAuthentication'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  InnoCyberAuthenticationError
}

