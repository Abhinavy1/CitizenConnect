# 🚀 CitizenConnect

A full-stack **Complaint Management System** built with **Node.js, Express.js, MongoDB, and JWT Authentication**. CitizenConnect enables citizens to register complaints, officers to manage and resolve them, and administrators to monitor the complete system through an analytics dashboard.

---

## 📖 Overview

CitizenConnect is designed to digitalize the complaint management process for municipalities, universities, housing societies, and government organizations.

The system provides secure authentication, role-based authorization, complaint tracking, officer assignment, status updates, and administrative monitoring.

---

# ✨ Features

## 👤 Citizen

- Register & Login
- JWT Authentication
- Create Complaint
- View My Complaints
- View Complaint Details
- Update Complaint
- Delete Complaint
- Search Complaints
- Filter Complaints
- Pagination

---

## 👮 Officer

- Login
- View All Complaints
- Assign Complaint
- Update Complaint Status
- Add Remarks
- Complaint Timeline

---

## 👨‍💼 Admin (Upcoming)

- Dashboard
- User Management
- Promote Citizen to Officer
- Demote Officer
- Block / Unblock Users
- Complaint Analytics
- Reports

---

# 🛠 Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication

- JWT (JSON Web Token)
- bcrypt.js

### Validation

- express-validator

### Development

- Nodemon
- dotenv
- CORS

### Version Control

- Git
- GitHub

---

# 📂 Folder Structure

```text
backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── complaintController.js
│   ├── officerController.js
│   ├── userController.js
│   └── adminController.js (Upcoming)
│
├── middleware
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   ├── errorMiddleware.js
│   └── logger.js
│
├── models
│   ├── User.js
│   └── Complaint.js
│
├── routes
│   ├── authRoutes.js
│   ├── complaintRoutes.js
│   ├── officerRoutes.js
│   ├── userRoutes.js
│   └── adminRoutes.js (Upcoming)
│
├── utils
│   ├── ApiResponse.js
│   ├── ApiError.js
│   └── asyncHandler.js
│
├── validators
│   └── complaintValidator.js
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/Abhinavy1/CitizenConnect.git
```

Go to backend

```bash
cd CitizenConnect/backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

Start development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server Port |
| MONGO_URI | MongoDB Atlas Connection String |
| JWT_SECRET | Secret key for JWT |

---

# 📡 API Overview

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

---

## Complaints

```
POST /api/complaints
GET /api/complaints
GET /api/complaints/:id
PUT /api/complaints/:id
DELETE /api/complaints/:id
```

---

## Officer

```
GET /api/officer/complaints
PUT /api/officer/assign/:id
PUT /api/officer/status/:id
POST /api/officer/remark/:id
```

---

## Admin (Upcoming)

```
GET /api/admin/dashboard
GET /api/admin/users
PUT /api/admin/promote/:id
PUT /api/admin/block/:id
```

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Role-Based Authorization
- Request Validation
- Global Error Handling
- Logger Middleware

---

# 🚀 Future Enhancements

- Admin Dashboard
- React Frontend
- Cloudinary Image Upload
- Email Notifications
- Complaint Tracking Timeline
- Charts & Analytics
- Docker Support
- CI/CD Pipeline
- Unit Testing
- Swagger API Documentation

---

# 📸 Screenshots

Screenshots will be added after frontend completion.

---

# 👨‍💻 Author

**Abhinav Kumar**

B.Tech Computer Science Engineering

Software Development | Backend Development | Full Stack Development

GitHub:

https://github.com/Abhinavy1

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.
