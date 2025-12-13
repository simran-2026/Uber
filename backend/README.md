# User Register Endpoint

This document describes the `POST /user/register` endpoint implemented in this project.

**Location**: [backend/controllers/user.controller.js](backend/controllers/user.controller.js)

**Route**: [backend/routes/user.routes.js](backend/routes/user.routes.js)
"email":"test@test1.com",
    "password":"test_password""email":"test@test1.com",
    "password":"test_password""email":"test@test1.com",
    "password":"test_password""email":"test@test1.com",
    "password":"test_password""email":"test@test1.com",
    "password":"test_password"
## Description

Creates a new user account. Validates the request body, hashes the password, stores the user in the database, and returns a JWT token and the created user object (password excluded).

## Endpoint

- Method: `POST`
- URL: `/user/register`

## Request Body

Content-Type: `application/json`

Required JSON structure:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "user@example.com",
  "password": "yourpassword"
}
```

Validation rules (as implemented in `user.routes.js`):

- `email`: must be a valid email (uses `express-validator` `isEmail()`)
- `fullname`: must have at least 3 characters (the route uses `isLength({ min: 3 })` for the `fullname` field)
- `password`: must be at least 6 characters long

Notes on the `fullname` structure:

- The controller and model expect `fullname` to be an object with `firstname` and `lastname` properties. Ensure `fullname` is sent in that format; e.g.:

```json
{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john@example.com",
  "password": "secret123"
}
```

## Responses / Status Codes

- `201 Created`

  - Returned when the user is successfully created. Response body contains an object with `token` and `user`.

- `400 Bad Request`

  - Returned for validation errors. The response contains `errors` (from `express-validator`) or `{ message: 'User already exist' }` when the email is already taken.

- `500 Internal Server Error`
  - Returned for unexpected server/database errors.

### Example Success Response (201)

```json
{
  "token": "<jwt-token-here>",
  "user": {
    "_id": "<user-id>",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "socketId": null
  }
}
```

### Example Validation Error (400)

```json
{
  "errors": [
    { "msg": "Invalid email address", "param": "email", "location": "body" }
  ]
}
```

## Usage Examples

Curl example:

```bash
curl -X POST http://localhost:3000/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "password": "secret123"
  }'
```

## Implementation notes

- Passwords are hashed using `bcrypt` via `userModel.hashPassword()` before saving.
- The created user's `generateAuthToken()` method (in `user.models.js`) signs a JWT with `process.env.JWT_SECRET` and returns it.
- The controller uses `validationResult` from `express-validator` to return validation errors.

## Related files

- Controller: [backend/controllers/user.controller.js](backend/controllers/user.controller.js)
- Routes: [backend/routes/user.routes.js](backend/routes/user.routes.js)
- Model: [backend/models/user.models.js](backend/models/user.models.js)
- Service: [backend/services/user.service.js](backend/services/user.service.js)

## Notes / To-do

- Confirm the exact `fullname` validation logic if you want stricter checks (e.g., require both `firstname` and `lastname` separately).
- Consider adding an API example for error scenarios (email already exists) with exact response shape.
 
## User Login Endpoint

This document describes the `POST /user/login` endpoint implemented in this project.

**Location**: [backend/controllers/user.controller.js](backend/controllers/user.controller.js)

**Route**: [backend/routes/user.routes.js](backend/routes/user.routes.js)

### Description

Authenticates an existing user. Validates the request body, checks the provided password against the stored hashed password, and returns a JWT token and the user object (password excluded) on success.

### Endpoint

- Method: `POST`
- URL: `/user/login`

### Request Body

Content-Type: `application/json`

Required JSON structure:

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

Validation rules (as implemented in `user.routes.js`):

- `email`: must be a valid email (uses `express-validator` `isEmail()`)
- `password`: must be at least 6 characters long

### Responses / Status Codes

- `200 OK`
  - Returned when authentication succeeds. Response body contains `token` and `user`.

- `400 Bad Request`
  - Returned for validation errors. The response contains `errors` (from `express-validator`).

- `401 Unauthorized`
  - Returned when email is not found or password does not match. Response body contains `{ message: 'Invalid email or password' }`.

- `500 Internal Server Error`
  - Returned for unexpected server/database errors.

#### Example Success Response (200)

```json
{
  "token": "<jwt-token-here>",
  "user": {
    "_id": "<user-id>",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "socketId": null
  }
}
```

#### Example Validation Error (400)

```json
{
  "errors": [
    { "msg": "Invalid email address", "param": "email", "location": "body" }
  ]
}
```

### Usage Examples

Curl example:

```bash
curl -X POST http://localhost:3000/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "secret123"
  }'
```

### Implementation notes

- The controller uses `validationResult` from `express-validator` to return validation errors.
- The controller fetches the user with `userModel.findOne({ email }).select('+password')` and then uses `user.comparePassword()` to validate the password.
- On success the controller calls `user.generateAuthToken()` to create a JWT.

## User Profile Endpoint

**Location**: [backend/controllers/user.controller.js](backend/controllers/user.controller.js)

**Route**: [backend/routes/user.routes.js](backend/routes/user.routes.js)

### Description

Returns the authenticated user's profile. The route uses the `authUser` middleware to authenticate the request and attaches the user to `req.user`.

### Endpoint

- Method: `GET`
- URL: `/user/profile`

### Authentication

Requires a valid JWT. The server accepts the token either as an HTTP-only cookie named `token` or in the `Authorization` header as `Bearer <token>`.

### Responses / Status Codes

- `200 OK` — Returns the authenticated user object: `{ user: req.user }`.
- `401 Unauthorized` — Returned when the token is missing, expired, invalid, or the user cannot be authenticated.

### Example Success Response (200)

```json
{
  "user": {
    "_id": "<user-id>",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "socketId": null
  }
}
```

### Usage Examples

With `Authorization` header:

```bash
curl -X GET http://localhost:3000/user/profile \
  -H "Authorization: Bearer <jwt-token-here>"
```

With cookie:

```bash
curl -X GET http://localhost:3000/user/profile \
  --cookie "token=<jwt-token-here>"
```

## User Logout Endpoint

**Location**: [backend/controllers/user.controller.js](backend/controllers/user.controller.js)

**Route**: [backend/routes/user.routes.js](backend/routes/user.routes.js)

### Description

Logs the user out by clearing the `token` cookie and blacklisting the provided JWT so it cannot be used again. Blacklisted tokens are stored with a 24-hour TTL (see `backend/models/blacklistToken.model.js`).

### Endpoint

- Method: `GET`
- URL: `/user/logout`

### Authentication

Requires a valid JWT (cookie `token` or `Authorization: Bearer <token>`). The route uses `authUser` middleware.

### Responses / Status Codes

- `200 OK` — `{ message: 'Logged out successfully' }` after clearing the cookie and adding the token to the blacklist.
- `401 Unauthorized` — If the request is unauthenticated.

### Example Success Response (200)

```json
{
  "message": "Logged out successfully"
}
```

### Usage Examples

Using `Authorization` header:

```bash
curl -X GET http://localhost:3000/user/logout \
  -H "Authorization: Bearer <jwt-token-here>"
```

Using cookie:

```bash
curl -X GET http://localhost:3000/user/logout \
  --cookie "token=<jwt-token-here>"
```

Notes:

- The controller clears the `token` cookie (so subsequent browser requests will not send it).
- The server also persists the raw token to the blacklist collection so the token cannot be reused until it expires (blacklist TTL is 24 hours).
- If you rely on the blacklist, ensure the authentication middleware checks the blacklist collection when validating tokens.
