-- Typed models for the InnoCyberAuthentication SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Authentication
---@field email string
---@field message? string
---@field name string
---@field new_password string
---@field password string
---@field referral_code string
---@field referrer? table
---@field success? boolean
---@field token? string
---@field user? table
---@field valid? boolean

---@class AuthenticationCreateData

local M = {}

return M
