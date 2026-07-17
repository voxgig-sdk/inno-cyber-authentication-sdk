-- InnoCyberAuthentication SDK exists test

local sdk = require("inno-cyber-authentication_sdk")

describe("InnoCyberAuthenticationSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
