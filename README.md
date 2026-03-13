# 🔐 Auth App — Full-Stack Authentication System

A full-stack authentication web application built with the **MERN stack** (MongoDB, Express, React, Node.js). It supports user registration, login, protected routes, and session management using localStorage.

---

## 🌐 Live Demo

| Service  | URL |
|----------|-----|
| Frontend | [auth-app-frontend-d0e5.onrender.com](https://auth-app-frontend-d0e5.onrender.com) |
| Backend  | [auth-app-backend-ou86.onrender.com](https://auth-app-backend-ou86.onrender.com) |

---

## 📁 Project Structure

```
auth-app/
├── client/                        # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Welcome.jsx        # Landing page
│   │   │   ├── LoginPage.jsx      # Login form
│   │   │   ├── SignupPage.jsx     # Signup form
│   │   │   ├── MainPage.jsx       # Protected dashboard
│   │   │   ├── ProtectedRoute.jsx # Route guard
│   │   │   └── NotFound.jsx       # 404 page
│   │   ├── App.jsx                # Route definitions
│   │   ├── main.jsx               # React entry point
│   │   └── index.css
│   ├── index.html
│   └── package.json
│
└── server/                        # Express Backend
    ├── controllers/
    │   ├── loginController.js     # Login logic
    │   └── signupController.js    # Signup logic
    ├── db/
    │   └── dbConnect.js           # MongoDB connection
    ├── models/
    │   └── userModel.js           # Mongoose user schema
    ├── routes/
    │   └── userRoutes.js          # API route definitions
    ├── index.js                   # Express app entry point
    └── package.json
```

---

## ⚙️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI library |
| Vite | 7.x | Build tool & dev server |
| React Router DOM | 7.x | Client-side routing |
| Axios | 1.x | HTTP requests |
| Tailwind CSS | 4.x | Utility-first styling |
| React Icons | 5.x | Icon components |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | LTS | Runtime environment |
| Express | 5.x | Web framework |
| MongoDB | — | NoSQL database |
| Mongoose | 9.x | ODM for MongoDB |
| bcrypt | 6.x | Password hashing |
| dotenv | 17.x | Environment variable management |
| CORS | 2.x | Cross-origin resource sharing |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm or yarn

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/auth-app.git
cd auth-app
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
PORT=3000
```

Start the backend server:

```bash
npm start
```

The server runs at `http://localhost:3000`.

---

### 3. Frontend Setup

```bash
cd client
npm install
```

> **Note:** The API base URL is currently hardcoded in `LoginPage.jsx` and `SignupPage.jsx`.  
> For local development, update the `axios.post` URLs from the production backend to `http://localhost:3000`.

Start the development server:

```bash
npm run dev
```

The frontend runs at `http://localhost:5173`.

---

## 🔌 API Reference

**Base URL:** `https://auth-app-backend-ou86.onrender.com/api`

---

### POST `/users/signup`

Register a new user.

**Request Body:**
```json
{
  "user_name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Responses:**

| Status | Description |
|--------|-------------|
| `201` | User registered successfully |
| `409` | Email already exists |
| `500` | Internal server error |

**Success Response:**
```json
{
  "user_name": "John Doe",
  "success": true,
  "message": "user sign up successfully"
}
```

---

### POST `/users/login`

Authenticate an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Responses:**

| Status | Description |
|--------|-------------|
| `200` | Login successful |
| `401` | Incorrect password |
| `404` | Email not found |
| `500` | Internal server error |

**Success Response:**
```json
{
  "user_name": "John Doe",
  "success": true,
  "message": "Login successful"
}
```

---

## 🗄️ Database Schema

**Collection:** `users` (inside `authDB`)

| Field | Type | Constraints |
|-------|------|-------------|
| `user_name` | String | Required |
| `email` | String | Required, Unique, Lowercase |
| `password` | String | Required, Hashed (bcrypt, salt rounds: 10) |
| `createdAt` | Date | Auto-generated (timestamps) |
| `updatedAt` | Date | Auto-generated (timestamps) |

> Passwords are hashed automatically via a Mongoose `pre('save')` middleware before being stored.

---

## 🗺️ Frontend Routes

| Route | Component | Access |
|-------|-----------|--------|
| `/` | `Welcome` | Public |
| `/login` | `LoginPage` | Public |
| `/signup` | `SignupPage` | Public |
| `/mainpage` | `MainPage` | 🔒 Protected |
| `*` | `NotFound` | Public (404) |

### Route Protection

`ProtectedRoute.jsx` checks for `isLoggedIn` in `localStorage`. If the value is absent, the user is redirected to `/login`.

---

## 🔒 Auth Flow

```
User visits /signup
    └── Submits form → POST /api/users/signup
        └── On success → localStorage.setItem("isLoggedIn", "true")
                       → localStorage.setItem("user_name", ...)
                       → Navigate to /mainpage

User visits /login
    └── Submits form → POST /api/users/login
        └── On success → localStorage.setItem("isLoggedIn", "true")
                       → localStorage.setItem("user_name", ...)
                       → Navigate to /mainpage

User clicks Logout (MainPage)
    └── localStorage.removeItem("isLoggedIn")
    └── localStorage.removeItem("user_name")
    └── Navigate to /login
```

---

## 📜 Available Scripts

### Frontend (`/client`)

| Script | Command | Description |
|--------|---------|-------------|
| Dev server | `npm run dev` | Start Vite dev server |
| Build | `npm run build` | Production build |
| Preview | `npm run preview` | Preview production build |
| Lint | `npm run lint` | Run ESLint |

### Backend (`/server`)

| Script | Command | Description |
|--------|---------|-------------|
| Start | `npm start` | Run with Node.js |

---



## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

Built with ❤️ using the MERN stack.
