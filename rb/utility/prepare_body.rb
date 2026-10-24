# InnoCyberAuthentication SDK utility: prepare_body
require_relative 'media'
module InnoCyberAuthenticationUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return InnoCyberAuthenticationUtilities.raw_body(ctx.reqdata) if InnoCyberAuthenticationUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
