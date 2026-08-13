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
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
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
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String]
Authentication = Struct.new(
  :email,
  :id,
  :message,
  :name,
  :newPassword,
  :password,
  :referralCode,
  :success,
  :token,
  keyword_init: true
)

# Request payload for Authentication#create.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
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
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String]
AuthenticationCreateData = Struct.new(
  :email,
  :id,
  :message,
  :name,
  :newPassword,
  :password,
  :referralCode,
  :success,
  :token,
  keyword_init: true
)

