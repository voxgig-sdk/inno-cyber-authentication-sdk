// Typed models for the InnoCyberAuthentication SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Authentication {
  email: string
  message?: string
  name: string
  new_password: string
  password: string
  referral_code: string
  referrer?: Record<string, any>
  success?: boolean
  token?: string
  user?: Record<string, any>
  valid?: boolean
}

export interface AuthenticationCreateData {
  email: string
  message?: string
  name: string
  new_password: string
  password: string
  referral_code: string
  referrer?: Record<string, any>
  success?: boolean
  token?: string
  user?: Record<string, any>
  valid?: boolean
}

