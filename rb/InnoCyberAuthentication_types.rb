# frozen_string_literal: true

# Typed models for the InnoCyberAuthentication SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Authentication entity data model.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] newPassword
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] referralCode
#   @return [String]
#
# @!attribute [rw] referrer
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
Authentication = Struct.new(
  :email,
  :message,
  :name,
  :newPassword,
  :password,
  :referralCode,
  :referrer,
  :success,
  :token,
  :user,
  :valid,
  keyword_init: true
)

# Request payload for Authentication#create.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] newPassword
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] referralCode
#   @return [String, nil]
#
# @!attribute [rw] token
#   @return [String]
AuthenticationCreateData = Struct.new(
  :email,
  :name,
  :newPassword,
  :password,
  :referralCode,
  :token,
  keyword_init: true
)

