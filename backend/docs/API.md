# 📚 CitizenConnect REST API Documentation

## Base URL

```
http://localhost:5000
```

---

# Authentication

---

## Register User

### Endpoint

```
POST /api/auth/register
```

### Authentication

❌ No

### Request

```json
{
    "firstName":"Abhinav",
    "lastName":"Kumar",
    "email":"abhinav@gmail.com",
    "phone":"9876543210",
    "password":"Password@123"
}
```

### Success Response

```json
{
    "success":true,
    "message":"Registration Successful"
}
```

---

## Login

### Endpoint

```
POST /api/auth/login
```

### Authentication

❌ No

### Request

```json
{
    "email":"abhinav@gmail.com",
    "password":"Password@123"
}
```

### Success Response

```json
{
    "success":true,
    "token":"JWT_TOKEN"
}
```

---

# Complaint APIs

---

## Create Complaint

### Endpoint

```
POST /api/complaints
```

### Authentication

✅ Citizen

### Headers

```
Authorization: Bearer JWT_TOKEN
```

### Request

```json
{
    "title":"Road Damage",
    "description":"Large pothole near LPU",
    "category":"Road",
    "priority":"High",
    "location":"Phagwara"
}
```

---

## Get My Complaints

```
GET /api/complaints
```

Query Parameters

```
page
limit
status
category
priority
search
sort
```

---

## Get Complaint By ID

```
GET /api/complaints/:id
```

---

## Update Complaint

```
PUT /api/complaints/:id
```

---

## Delete Complaint

```
DELETE /api/complaints/:id
```

---

# Officer APIs

---

## View All Complaints

```
GET /api/officer/complaints
```

Role Required

```
Officer
```

---

## Assign Complaint

```
PUT /api/officer/assign/:id
```

---

## Update Complaint Status

```
PUT /api/officer/status/:id
```

Request

```json
{
    "status":"Resolved"
}
```

---

## Add Officer Remark

```
POST /api/officer/remark/:id
```

Request

```json
{
    "message":"Inspection completed successfully."
}
```

---

# Admin APIs (Upcoming)

```
GET /api/admin/dashboard
```

```
GET /api/admin/users
```

```
PUT /api/admin/promote/:id
```

```
PUT /api/admin/block/:id
```

---

# Status Codes

| Code | Meaning |
|------|---------|
|200|Success|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|500|Internal Server Error|

---

# Authentication

All protected routes require:

```
Authorization: Bearer JWT_TOKEN
```

---

# Roles

```
Citizen

Officer

Admin
```

---

# Version

```
API Version : v1
```