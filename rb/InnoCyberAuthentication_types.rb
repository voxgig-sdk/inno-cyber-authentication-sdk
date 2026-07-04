# frozen_string_literal: true

# Typed models for the InnoCyberAuthentication SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
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
# @!attribute [rw] new_password
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] referral_code
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
  :new_password,
  :password,
  :referral_code,
  :referrer,
  :success,
  :token,
  :user,
  :valid,
  keyword_init: true
)

# Match filter for Authentication#create (any subset of Authentication fields).
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] new_password
#   @return [String, nil]
#
# @!attribute [rw] password
#   @return [String, nil]
#
# @!attribute [rw] referral_code
#   @return [String, nil]
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
AuthenticationCreateData = Struct.new(
  :email,
  :message,
  :name,
  :new_password,
  :password,
  :referral_code,
  :referrer,
  :success,
  :token,
  :user,
  :valid,
  keyword_init: true
)

