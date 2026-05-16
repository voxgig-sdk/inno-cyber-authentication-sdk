# InnoCyberAuthentication Ruby SDK Reference

Complete API reference for the InnoCyberAuthentication Ruby SDK.


## InnoCyberAuthenticationSDK

### Constructor

```ruby
require_relative 'inno-cyber-authentication_sdk'

client = InnoCyberAuthenticationSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `InnoCyberAuthenticationSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = InnoCyberAuthenticationSDK.test
```


### Instance Methods

#### `Authentication(data = nil)`

Create a new `Authentication` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## AuthenticationEntity

```ruby
authentication = client.Authentication
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | ``$STRING`` | Yes |  |
| `message` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | Yes |  |
| `new_password` | ``$STRING`` | Yes |  |
| `password` | ``$STRING`` | Yes |  |
| `referral_code` | ``$STRING`` | Yes |  |
| `referrer` | ``$OBJECT`` | No |  |
| `success` | ``$BOOLEAN`` | No |  |
| `token` | ``$STRING`` | No |  |
| `user` | ``$OBJECT`` | No |  |
| `valid` | ``$BOOLEAN`` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `email` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `new_password` | - | - | - | - | - |
| `password` | - | - | - | - | - |
| `referral_code` | - | - | Yes | - | - |
| `referrer` | - | - | - | - | - |
| `success` | - | - | - | - | - |
| `token` | - | - | Yes | - | - |
| `user` | - | - | - | - | - |
| `valid` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result, err`

Create a new entity with the given data.

```ruby
result, err = client.Authentication.create({
  "email" => # `$STRING`,
  "name" => # `$STRING`,
  "new_password" => # `$STRING`,
  "password" => # `$STRING`,
  "referral_code" => # `$STRING`,
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = InnoCyberAuthenticationSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

