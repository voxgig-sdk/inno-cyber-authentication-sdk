# ProjectName SDK exists test

import pytest
from innocyberauthentication_sdk import InnoCyberAuthenticationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = InnoCyberAuthenticationSDK.test(None, None)
        assert testsdk is not None
