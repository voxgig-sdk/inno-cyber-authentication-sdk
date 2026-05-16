package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAuthenticationEntityFunc func(client *InnoCyberAuthenticationSDK, entopts map[string]any) InnoCyberAuthenticationEntity

