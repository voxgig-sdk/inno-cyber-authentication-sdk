-- InnoCyberAuthentication SDK error

local InnoCyberAuthenticationError = {}
InnoCyberAuthenticationError.__index = InnoCyberAuthenticationError


function InnoCyberAuthenticationError.new(code, msg, ctx)
  local self = setmetatable({}, InnoCyberAuthenticationError)
  self.is_sdk_error = true
  self.sdk = "InnoCyberAuthentication"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function InnoCyberAuthenticationError:error()
  return self.msg
end


function InnoCyberAuthenticationError:__tostring()
  return self.msg
end


return InnoCyberAuthenticationError
