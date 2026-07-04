# Typed models for the InnoCyberAuthentication SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Authentication:
    email: str
    name: str
    new_password: str
    password: str
    referral_code: str
    message: Optional[str] = None
    referrer: Optional[dict] = None
    success: Optional[bool] = None
    token: Optional[str] = None
    user: Optional[dict] = None
    valid: Optional[bool] = None


@dataclass
class AuthenticationCreateData:
    email: Optional[str] = None
    message: Optional[str] = None
    name: Optional[str] = None
    new_password: Optional[str] = None
    password: Optional[str] = None
    referral_code: Optional[str] = None
    referrer: Optional[dict] = None
    success: Optional[bool] = None
    token: Optional[str] = None
    user: Optional[dict] = None
    valid: Optional[bool] = None

