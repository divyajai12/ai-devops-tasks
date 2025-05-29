GET /api/users
Returns a paginated list of users, with optional filtering by user role.
Query Parameters
| Name | Type | Description | Default | Constraints |
|--------|---------|---------------------------------------------|---------|------------------|
| page | integer | Page number to retrieve | 1 | ≥ 1 |
| limit | integer | Number of results per page | 10 | 1–100 |
| role | string | Filter users by role (e.g., admin, user)| (none) | Optional |
Sample Request
GET /api/users?page=2&limit=5&role=admin
Sample Response
{
  "page": 2,
  "limit": 5,
  "total": 17,
  "users": [
    {
      "id": 6,
      "name": "Jane Doe",
      "role": "admin"
    },
    {
      "id": 7,
      "name": "John Smith",
      "role": "admin"
    }
    // ...more users
  ]
}
Description
This endpoint retrieves a list of users from the system. Results are paginated and can be filtered by user role.
If no page or limit is specified, the first page with 10 users is returned.
The limit parameter cannot exceed 100.
If the role parameter is provided, only users with the specified role are included in the results.