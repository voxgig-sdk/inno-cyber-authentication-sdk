# InnoCyberAuthentication SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module InnoCyberAuthenticationFeatures
  def self.make_feature(name)
    case name
    when "base"
      InnoCyberAuthenticationBaseFeature.new
    when "test"
      InnoCyberAuthenticationTestFeature.new
    else
      InnoCyberAuthenticationBaseFeature.new
    end
  end
end
