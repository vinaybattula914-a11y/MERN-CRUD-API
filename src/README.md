# Task CRUD REST API

A RESTful CRUD API built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**. This project demonstrates creating, reading, updating, and deleting tasks while following REST API best practices.

---

## 📌 Project Objective

Build a RESTful API for managing tasks with MongoDB as the database. The project includes CRUD operations, Mongoose validation, centralized error handling, and request logging.

---

## 🚀 Features

- Create a new task
- Retrieve all tasks
- Retrieve a single task by ID
- Update a task (PUT & PATCH)
- Delete a task
- MongoDB database integration
- Mongoose schema validation
- Centralized error handling
- Request logging using Morgan
- Secure middleware using Helmet
- CORS enabled

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Morgan
- Helmet
- CORS
- Dotenv
- Nodemon

---

## 📂 Project Structure

```
Task-CRUD-API
│
├── src
│   ├── config
│   │   └── database.js
│   ├── controllers
│   │   └── taskController.js
│   ├── middleware
│   │   └── errorHandler.js
│   ├── models
│   │   └── Task.js
│   ├── routes
│   │   └── taskRoutes.js
│   ├── app.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── Task_API.postman_collection.json
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/https://github.com/vinaybattula914-a11y/task-crud-api.git
```

### 2. Navigate to the project folder

```bash
cd task-crud-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file.

Example:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/mern_crud_api
NODE_ENV=development
```

### 5. Start MongoDB

Ensure MongoDB Community Server is running.

### 6. Run the application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

# API Endpoints

## Base URL

```
http://localhost:5000
```

### Get all tasks

```
GET /api/tasks
```

### Get task by ID

```
GET /api/tasks/:id
```

### Create a task

```
POST /api/tasks
```

Sample Body

```json
{
  "title": "Complete Internship Task",
  "description": "Build REST API using Express",
  "completed": false
}
```

---

### Update entire task

```
PUT /api/tasks/:id
```

Sample Body

```json
{
  "title": "Updated Task",
  "description": "Updated Description",
  "completed": true
}
```

---

### Update specific fields

```
PATCH /api/tasks/:id
```

Sample Body

```json
{
  "completed": true
}
```

---

### Delete task

```
DELETE /api/tasks/:id
```

---

## Sample Success Response

```json
{
  "_id": "686bc0b3b3c74d7d0f7e12a1",
  "title": "Complete Internship Task",
  "description": "Build REST API using Express",
  "completed": false,
  "createdAt": "2026-07-11T12:00:00.000Z",
  "updatedAt": "2026-07-11T12:00:00.000Z"
}
```

---

## Validation

The API validates incoming data using **Mongoose**.

Example validations:

- Title is required
- Description is optional
- Completed must be a boolean

---

## Error Handling

The project includes centralized error handling that returns meaningful HTTP status codes and JSON error responses.

Example:

```json
{
  "success": false,
  "message": "Task not found"
}
```

---

## Logging

HTTP requests are logged using **Morgan** for easier debugging and monitoring.

---

## Testing

The API can be tested using:

- Postman
- Thunder Client
- Insomnia

A Postman collection is included in the repository.

---

## Environment Variables

Create a `.env` file using the following template:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/mern_crud_api
NODE_ENV=development
```

---

## Author

**Battula Vinay**

B.Tech CSE | MERN Stack Developer

GitHub: https://github.com/https://github.com/vinaybattula914-a11y

LinkedIn: https://www.linkedin.com/in/https://www.linkedin.com/in/vinay-battula-731343301/

---

## License

This project is developed for learning purposes as part of a **MERN Stack Virtual Internship Task**.