package = "voxgig-sdk-inno-cyber-authentication"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/inno-cyber-authentication-sdk.git"
}
description = {
  summary = "InnoCyberAuthentication SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["inno-cyber-authentication_sdk"] = "inno-cyber-authentication_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
