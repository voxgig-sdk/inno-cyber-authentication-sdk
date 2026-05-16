# InnoCyberAuthentication SDK utility: feature_add
module InnoCyberAuthenticationUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
