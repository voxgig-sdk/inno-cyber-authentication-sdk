# InnoCyberAuthentication SDK utility: make_context

from projectname_sdk.core.context import InnoCyberAuthenticationContext


def make_context_util(ctxmap, basectx):
    return InnoCyberAuthenticationContext(ctxmap, basectx)
