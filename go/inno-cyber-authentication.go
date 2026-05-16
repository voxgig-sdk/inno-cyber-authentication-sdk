package voxgiginnocyberauthenticationsdk

import (
	"github.com/voxgig-sdk/inno-cyber-authentication-sdk/core"
	"github.com/voxgig-sdk/inno-cyber-authentication-sdk/entity"
	"github.com/voxgig-sdk/inno-cyber-authentication-sdk/feature"
	_ "github.com/voxgig-sdk/inno-cyber-authentication-sdk/utility"
)

// Type aliases preserve external API.
type InnoCyberAuthenticationSDK = core.InnoCyberAuthenticationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type InnoCyberAuthenticationEntity = core.InnoCyberAuthenticationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type InnoCyberAuthenticationError = core.InnoCyberAuthenticationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAuthenticationEntityFunc = func(client *core.InnoCyberAuthenticationSDK, entopts map[string]any) core.InnoCyberAuthenticationEntity {
		return entity.NewAuthenticationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewInnoCyberAuthenticationSDK = core.NewInnoCyberAuthenticationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
