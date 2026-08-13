# Typed models for the InnoCyberAuthentication SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AuthenticationRequired(TypedDict):
    newPassword: str
    password: str
    referralCode: str
    token: str


class Authentication(AuthenticationRequired, total=False):
    email: str
    id: str
    message: str
    name: str
    success: bool


class AuthenticationCreateDataRequired(TypedDict):
    newPassword: str
    password: str
    referralCode: str
    token: str


class AuthenticationCreateData(AuthenticationCreateDataRequired, total=False):
    email: str
    id: str
    message: str
    name: str
    success: bool
