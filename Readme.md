# Navigate to the frontend directory

cd frontend

# Install dependencies (if not already installed)

npm install

# Start the frontend server

npm start

# Note :

- Ensure you have Node.js and npm installed on your system.
- Run npm install to ensure all dependencies are installed before starting the server.
- Use npm start to start the server, which will typically run on http://localhost:3000

# Navigate to the backend directory

cd backend

# Install dependencies (if not already installed)

npm install

# Start the backend server

npm start

# Note :

- By default, the backend server will typically run on http://localhost:8000 (or any specified port in your setup).

# Full Workflow :

# Start the Frontend Server

```bash
cd frontend
npm install
npm start
```

And for the backend server:

# Start the Backend Server

```bash
cd backend
npm install
npm start
```

# Project Description

- The Contact Management System is a mini-feature of a CRM application designed to help users efficiently manage contact information.
- It provides an intuitive interface to perform CRUD operations (Create, Read, Update, Delete) on contact details such as name, email, phone number, company, and job title.
- This application ensures that users can organize and access their contacts effectively, supporting better communication and relationship management.

# Major Technical Decisions

## Database Choice :

- MongoDB: MongoDB was chosen for its flexibility in handling document-based data, allowing easy schema evolution and high performance for CRUD operations.

## Frontend Framework :

- React.js: React.js was selected to build a responsive and dynamic user interface. It provides reusable components and excellent state management for efficient UI rendering.

## Styling - Material UI (MUI):

- MUI components were used for a consistent, modern, and clean UI design while reducing development time for styled components.

## Backend Framework

- Node.js with Express.js: Node.js, coupled with Express.js, was used to handle API requests efficiently, providing a scalable and maintainable backend structure.

## API Communication:

- RESTful API endpoints were implemented for seamless interaction between the frontend and backend. This ensures modularity and allows independent testing of each layer.

# How Each Part of the App Works :

## Frontend:

- Form to Add Contacts: A user-friendly form allows users to add new contacts with fields for First Name, Last Name, Email, Phone Number, Company, and Job Title. Validation ensures data accuracy.
- Contacts Table: Displays a list of all saved contacts using a paginated and sortable table for easy navigation.
- Edit/Delete Options: Each contact has options for editing or deletion, ensuring an up-to-date contact list.

## Backend :

- API Endpoints:
  - **POST /contacts** : Adds a new contact to the database.
  - **GET /contacts** : Retrieves a paginated list of contacts.
  - **PUT /contacts/:id** : Updates a contact's details by ID.
  - **DELETE /contacts/:id** : Deletes a contact by ID.

## Database:

- **MongoDB** - Stores contact details as documents in a collection.
  Provides fast and efficient CRUD operations.
  Ensures scalability and schema flexibility.

#### MongoDB Schema for Contact Management

Below is the Mongoose schema used to define the structure of the `User` model for the Contact Management System.

```javascript
const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Company: {
    type: String,
    required: true,
  },
  JobTitle: {
    type: String,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("User", userSchema);
```

## Integration:

- The frontend communicates with the backend via Axios for data transfer.
- State management in React ensures a smooth user experience while interacting with the API

# Challenges and Solutions:

## 1. Challenge:

- Implementing a table to display a list of results using Material React Table without prior knowledge of the library.

## Solution:

- To overcome this, I referred to the official documentation of Material React Table. I utilized the provided examples and guidelines to understand how to structure the table and customize its components. This allowed me to efficiently implement a table that suited the design and functionality needs of the project, ensuring an intuitive display of the data.[Material React Table](https://www.material-react-table.com/)

- This approach reflects how you used the official documentation to learn and apply Material React Table effectively.

## 2. Challenge:

- While fetching results using a GET request with Axios, I encountered a server error. After troubleshooting, I realized that the issue was caused by a Cross-Origin Resource Sharing (CORS) error.

## Solution :

- To overcome this, I researched the issue by reading Stack Overflow threads [article](https://stackoverflow.com/questions/51128176/reactjs-api-data-fetching-cors-error) and Medium [article](<https://medium.com/@dhanushsaireddy8/resolving-cors-issues-in-express-and-react-js-a-comprehensive-guide-31ca5d58f90b#:~:text=Solutions%20for%20CORS%20issue%3A&text=use(cors())%3B,other%20middleware%20definitions%20are%20here%E2%80%A6&text=This%20configuration%20allows%20requests%20from,Express%20backend%2C%20avoiding%20CORS%20restrictions.>) to understand CORS and how to resolve it. I implemented the appropriate CORS headers on the server and configured Axios with the correct settings to handle the cross-origin requests, which successfully resolved the error and allowed the data to be fetched properly.

- This highlights your problem-solving process and how you used resources to fix the issue.
