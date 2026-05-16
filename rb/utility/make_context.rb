# InnoCyberAuthentication SDK utility: make_context
require_relative '../core/context'
module InnoCyberAuthenticationUtilities
  MakeContext = ->(ctxmap, basectx) {
    InnoCyberAuthenticationContext.new(ctxmap, basectx)
  }
end
