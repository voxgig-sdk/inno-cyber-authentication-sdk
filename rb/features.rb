# InnoCyberAuthentication SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module InnoCyberAuthenticationFeatures
  def self.make_feature(name)
    case name
    when "base"
      InnoCyberAuthenticationBaseFeature.new
    when "ratelimit"
      InnoCyberAuthenticationRatelimitFeature.new
    when "retry"
      InnoCyberAuthenticationRetryFeature.new
    when "test"
      InnoCyberAuthenticationTestFeature.new
    when "timeout"
      InnoCyberAuthenticationTimeoutFeature.new
    else
      InnoCyberAuthenticationBaseFeature.new
    end
  end
end
