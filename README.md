USER REGISTRATION FORM (CRUD) — README

This project is a simple User Management application built with React, TypeScript, Vite, Material UI, React Hook Form, Axios, and JSON Server.

It allows you to:
- Register a new user
- Display all users
- Edit existing users
- Delete users


TECH STACK
- React + TypeScript (Vite)
- Material UI (MUI)
- React Hook Form + Zod validation
- Axios for API calls
- JSON Server as a mock backend


SETUP INSTRUCTIONS

1. Install dependencies
Run the following command in the project folder:

npm install


2. Start the frontend application

npm run dev

The app will run at:
http://localhost:5173


3. Start the mock backend (JSON Server)

Create a file named db.json in the project root with the following content:

{
  "users": []
}

Then run:

npm run server

The backend will run at:
https://user-registration-production-cd92.up.railway.app


FEATURES

Create User
- Fill out the registration form
- Submit to save user data
- Data is stored in JSON Server

View Users
- Displays a list of all registered users
- Updates automatically after create/edit/delete

Edit User
- Click the Edit button for a user
- Form loads existing user data
- Save to update the user

Delete User
- Click the Delete button
- User is removed from the database


PROJECT STRUCTURE (Example)

src/
  components/
    UserForm.tsx
    UserList.tsx
  api/
    userApi.ts
  types/
    user.ts
  App.tsx
  main.tsx


API ENDPOINTS (JSON Server)

GET     /users        -> Get all users
POST    /users        -> Create new user
PUT     /users/:id    -> Update user
DELETE  /users/:id    -> Delete user


VALIDATION

Form validation is implemented using:
- React Hook Form


Ensures required fields and correct data formats.


NOTES

- This project uses JSON Server as a mock backend
- Data is stored locally in db.json
- Suitable for learning CRUD operations in React