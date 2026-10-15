# Course Registration (CRUD with MongoDB Atlas)

## 1. Set up MongoDB Atlas
1. Sign in at https://cloud.mongodb.com and create a free (M0) cluster.
2. Database Access -> Add New Database User -> set a username and password.
3. Network Access -> Add IP Address -> "Allow access from anywhere" (0.0.0.0/0) for lab use.
4. Database -> Connect -> Drivers -> copy the connection string.
5. Open the .env file and replace the MONGO_URI value with your string.
   Put your password in place of <password> and add /courseDB before the "?".
   Example:
   MONGO_URI=mongodb+srv://myuser:mypass@cluster0.abcde.mongodb.net/courseDB?retryWrites=true&w=majority

## 2. Run
   npm install
   npm start
Open http://localhost:3000

## API
| Operation | Method | URL                       |
|-----------|--------|---------------------------|
| Create    | POST   | /api/registrations        |
| Read      | GET    | /api/registrations        |
| Update    | PUT    | /api/registrations/:id    |
| Delete    | DELETE | /api/registrations/:id    |
