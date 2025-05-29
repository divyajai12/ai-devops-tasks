# Simple Task API

## Description
A RESTful API for task management, built with Node.js, Express, and MongoDB.  
It allows creating, reading, updating, and deleting tasks, with filtering options and basic user authorization.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-task-api.git
   cd simple-task-api
   Install dependencies:npm install
   Create a .env file with your MongoDB connection string and any necessary config variables:MONGODB_URI=your_mongodb_connection_string
PORT=3000
Start the server:npm start
Usage
The API will be running at http://localhost:3000 (or the port you specified).

Use tools like Postman or curl to interact with the endpoints.
API Endpoints
Tasks
Method	Endpoint	Description
GET	/tasks	Get all tasks (supports filters)
POST	/tasks	Create a new task
GET	/tasks/:id	Get task by ID
PUT	/tasks/:id	Update task by ID
DELETE	/tasks/:id	Delete task by ID
Filters
Use query parameters in GET /tasks to filter tasks:

status (e.g., pending, completed)

priority (e.g., low, medium, high)

Authorization
Basic user authorization is required (details to be implemented).