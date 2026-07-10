# InnoCyberAuthentication TypeScript SDK Reference

Complete API reference for the InnoCyberAuthentication TypeScript SDK.


## InnoCyberAuthenticationSDK

### Constructor

```ts
new InnoCyberAuthenticationSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `InnoCyberAuthenticationSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = InnoCyberAuthenticationSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `InnoCyberAuthenticationSDK` instance in test mode.


### Instance Methods

#### `Authentication(data?: object)`

Create a new `Authentication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthenticationEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `InnoCyberAuthenticationSDK.test()`.

**Returns:** `InnoCyberAuthenticationSDK` instance in test mode.


---

## AuthenticationEntity

```ts
const authentication = client.Authentication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `message` | `string` | No |  |
| `name` | `string` | Yes |  |
| `new_password` | `string` | Yes |  |
| `password` | `string` | Yes |  |
| `referral_code` | `string` | Yes |  |
| `referrer` | `Record<string, any>` | No |  |
| `success` | `boolean` | No |  |
| `token` | `string` | No |  |
| `user` | `Record<string, any>` | No |  |
| `valid` | `boolean` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `email` | - |
| `message` | - |
| `name` | - |
| `new_password` | - |
| `password` | - |
| `referral_code` | Yes |
| `referrer` | - |
| `success` | - |
| `token` | Yes |
| `user` | - |
| `valid` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Authentication().create({
  email: 'example_email',
  name: 'example_name',
  new_password: 'example_new_password',
  password: 'example_password',
  referral_code: 'example_referral_code',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `client()`

Return the parent `InnoCyberAuthenticationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new InnoCyberAuthenticationSDK({
  feature: {
    test: { active: true },
  }
})
```

