package core

type InnoCyberAuthenticationError struct {
	IsInnoCyberAuthenticationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewInnoCyberAuthenticationError(code string, msg string, ctx *Context) *InnoCyberAuthenticationError {
	return &InnoCyberAuthenticationError{
		IsInnoCyberAuthenticationError: true,
		Sdk:              "InnoCyberAuthentication",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *InnoCyberAuthenticationError) Error() string {
	return e.Msg
}
