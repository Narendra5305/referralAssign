## Backend



Candidate Management API
=========================

A simple backend API to manage referred candidates using Node.js, Express, MongoDB, and JWT authentication.

------------------------
Features:
------------------------
- User registration and login with JWT
- Add, get, update, and delete candidates
- Resume URL must end with .pdf
- Valid email and phone number format
- Protected routes using token-based auth

------------------------
API Endpoints:
------------------------
#api => https://referralassign.onrender.com/

# User
POST   /api/users/register    -> Register new user
POST   /api/users/login       -> Login and get token

# Candidates (Require JWT token in header: Authorization: Bearer <token>)
POST   /api/candidates        -> Add new candidate
GET    /api/candidates        -> Get all candidates
PUT    /api/candidates/:id/status -> Update candidate status
DELETE /api/candidates/:id    -> Delete candidate

------------------------
Request Example (POST /api/candidates):
------------------------

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "jobTitle": "Backend Developer",
  "resumeUrl": "https://example.com/resume.pdf"
}

------------------------
How to Run:
------------------------
1. Install dependencies:  npm install
2. Create `.env` file:

   PORT=5000
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret_key

3. Start server:  npm start

------------------------



## Frontend
=============================

A responsive React frontend application for managing referred candidates. Built using Context API for authentication and Vanilla CSS for styling.

Tech Stack
----------
- React
- React Router DOM
- Context API
- Vanilla CSS

Installation
------------
1. Clone the repository:
   git clone https://github.com/your-username/candidate-management-frontend.git
   cd candidate-management-frontend

2. Install dependencies:
   npm install

3. Start the application:
   npm run dev    # (for Vite)
   or
   npm start      # (for Create React App)

Backend API Base URL
--------------------
https://referralassign.onrender.com/

Authentication APIs
-------------------
POST /api/users/register
→ Body: { "name": "Aadvik", "email": "aadvik@example.com", "password": "123456" }

POST /api/users/login
→ Body: { "email": "aadvik@example.com", "password": "123456" }
→ Response: { "token": "<jwt_token>" }

Use the token in all future requests:
Authorization: Bearer <your_token>

Candidate APIs
--------------
GET    /api/candidates
POST   /api/candidates
PUT    /api/candidates/:id/status
DELETE /api/candidates/:id

App Features
------------
- User registration and login using JWT authentication
- Dashboard displaying all referred candidates
- Update candidate status (Pending, Reviewed, Hired)
- Refer new candidate via form
- Search candidates by job title or status
- Blue and white theme with responsive layout

Project Structure
-----------------
src/
├── App.jsx
├── index.js
├── App.css
├── utils/api.js
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── ReferCandidate.jsx
└── components/
    ├── Navbar.jsx
    └── CandidateCard.jsx

Future Enhancements
-------------------
- Token expiration handling
- Toast notifications
- File upload instead of resume URL
- Pagination
- Responsive design improvements

License
-------
MIT
