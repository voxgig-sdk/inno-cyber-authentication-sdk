<?php
declare(strict_types=1);

// InnoCyberAuthentication SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

InnoCyberAuthenticationUtility::setRegistrar(function (InnoCyberAuthenticationUtility $u): void {
    $u->clean = [InnoCyberAuthenticationClean::class, 'call'];
    $u->done = [InnoCyberAuthenticationDone::class, 'call'];
    $u->make_error = [InnoCyberAuthenticationMakeError::class, 'call'];
    $u->feature_add = [InnoCyberAuthenticationFeatureAdd::class, 'call'];
    $u->feature_hook = [InnoCyberAuthenticationFeatureHook::class, 'call'];
    $u->feature_init = [InnoCyberAuthenticationFeatureInit::class, 'call'];
    $u->fetcher = [InnoCyberAuthenticationFetcher::class, 'call'];
    $u->make_fetch_def = [InnoCyberAuthenticationMakeFetchDef::class, 'call'];
    $u->make_context = [InnoCyberAuthenticationMakeContext::class, 'call'];
    $u->make_options = [InnoCyberAuthenticationMakeOptions::class, 'call'];
    $u->make_request = [InnoCyberAuthenticationMakeRequest::class, 'call'];
    $u->make_response = [InnoCyberAuthenticationMakeResponse::class, 'call'];
    $u->make_result = [InnoCyberAuthenticationMakeResult::class, 'call'];
    $u->make_point = [InnoCyberAuthenticationMakePoint::class, 'call'];
    $u->make_spec = [InnoCyberAuthenticationMakeSpec::class, 'call'];
    $u->make_url = [InnoCyberAuthenticationMakeUrl::class, 'call'];
    $u->param = [InnoCyberAuthenticationParam::class, 'call'];
    $u->prepare_auth = [InnoCyberAuthenticationPrepareAuth::class, 'call'];
    $u->prepare_body = [InnoCyberAuthenticationPrepareBody::class, 'call'];
    $u->prepare_headers = [InnoCyberAuthenticationPrepareHeaders::class, 'call'];
    $u->prepare_method = [InnoCyberAuthenticationPrepareMethod::class, 'call'];
    $u->prepare_params = [InnoCyberAuthenticationPrepareParams::class, 'call'];
    $u->prepare_path = [InnoCyberAuthenticationPreparePath::class, 'call'];
    $u->prepare_query = [InnoCyberAuthenticationPrepareQuery::class, 'call'];
    $u->result_basic = [InnoCyberAuthenticationResultBasic::class, 'call'];
    $u->result_body = [InnoCyberAuthenticationResultBody::class, 'call'];
    $u->result_headers = [InnoCyberAuthenticationResultHeaders::class, 'call'];
    $u->transform_request = [InnoCyberAuthenticationTransformRequest::class, 'call'];
    $u->transform_response = [InnoCyberAuthenticationTransformResponse::class, 'call'];
});
