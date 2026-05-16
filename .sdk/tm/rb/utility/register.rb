# InnoCyberAuthentication SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

InnoCyberAuthenticationUtility.registrar = ->(u) {
  u.clean = InnoCyberAuthenticationUtilities::Clean
  u.done = InnoCyberAuthenticationUtilities::Done
  u.make_error = InnoCyberAuthenticationUtilities::MakeError
  u.feature_add = InnoCyberAuthenticationUtilities::FeatureAdd
  u.feature_hook = InnoCyberAuthenticationUtilities::FeatureHook
  u.feature_init = InnoCyberAuthenticationUtilities::FeatureInit
  u.fetcher = InnoCyberAuthenticationUtilities::Fetcher
  u.make_fetch_def = InnoCyberAuthenticationUtilities::MakeFetchDef
  u.make_context = InnoCyberAuthenticationUtilities::MakeContext
  u.make_options = InnoCyberAuthenticationUtilities::MakeOptions
  u.make_request = InnoCyberAuthenticationUtilities::MakeRequest
  u.make_response = InnoCyberAuthenticationUtilities::MakeResponse
  u.make_result = InnoCyberAuthenticationUtilities::MakeResult
  u.make_point = InnoCyberAuthenticationUtilities::MakePoint
  u.make_spec = InnoCyberAuthenticationUtilities::MakeSpec
  u.make_url = InnoCyberAuthenticationUtilities::MakeUrl
  u.param = InnoCyberAuthenticationUtilities::Param
  u.prepare_auth = InnoCyberAuthenticationUtilities::PrepareAuth
  u.prepare_body = InnoCyberAuthenticationUtilities::PrepareBody
  u.prepare_headers = InnoCyberAuthenticationUtilities::PrepareHeaders
  u.prepare_method = InnoCyberAuthenticationUtilities::PrepareMethod
  u.prepare_params = InnoCyberAuthenticationUtilities::PrepareParams
  u.prepare_path = InnoCyberAuthenticationUtilities::PreparePath
  u.prepare_query = InnoCyberAuthenticationUtilities::PrepareQuery
  u.result_basic = InnoCyberAuthenticationUtilities::ResultBasic
  u.result_body = InnoCyberAuthenticationUtilities::ResultBody
  u.result_headers = InnoCyberAuthenticationUtilities::ResultHeaders
  u.transform_request = InnoCyberAuthenticationUtilities::TransformRequest
  u.transform_response = InnoCyberAuthenticationUtilities::TransformResponse
}
