# InnoCyberAuthentication SDK feature factory

from feature.base_feature import InnoCyberAuthenticationBaseFeature
from feature.test_feature import InnoCyberAuthenticationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: InnoCyberAuthenticationBaseFeature(),
        "test": lambda: InnoCyberAuthenticationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
