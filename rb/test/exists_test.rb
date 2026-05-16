# InnoCyberAuthentication SDK exists test

require "minitest/autorun"
require_relative "../InnoCyberAuthentication_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = InnoCyberAuthenticationSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
