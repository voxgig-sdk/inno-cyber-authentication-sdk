# InnoCyberAuthentication SDK feature factory

from innocyberauthentication_sdk.feature.base_feature import InnoCyberAuthenticationBaseFeature
from innocyberauthentication_sdk.feature.ratelimit_feature import InnoCyberAuthenticationRatelimitFeature
from innocyberauthentication_sdk.feature.retry_feature import InnoCyberAuthenticationRetryFeature
from innocyberauthentication_sdk.feature.test_feature import InnoCyberAuthenticationTestFeature
from innocyberauthentication_sdk.feature.timeout_feature import InnoCyberAuthenticationTimeoutFeature


_FEATURES = {
    "base": lambda: InnoCyberAuthenticationBaseFeature(),
    "ratelimit": lambda: InnoCyberAuthenticationRatelimitFeature(),
    "retry": lambda: InnoCyberAuthenticationRetryFeature(),
    "test": lambda: InnoCyberAuthenticationTestFeature(),
    "timeout": lambda: InnoCyberAuthenticationTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
