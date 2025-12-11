# User Register Endpoint

This document describes the `POST /user/register` endpoint implemented in this project.

**Location**: [backend/controllers/user.controller.js](backend/controllers/user.controller.js)

**Route**: [backend/routes/user.routes.js](backend/routes/user.routes.js)

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
