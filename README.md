

---

# 🔒 HumanChain AI Safety Incident Log API

A RESTful API service built with **Node.js**, **Express**, and **MongoDB** that allows users to log, manage, and review safety-related incidents involving AI systems. This backend serves as the core infrastructure for reporting and analyzing safety breaches in AI deployments.

---

## 📦 Tech Stack

| Layer          | Technology            |
|----------------|------------------------|
| Runtime        | [Node.js](https://nodejs.org/) |
| Framework      | [Express.js](https://expressjs.com/) |
| Database       | [MongoDB](https://www.mongodb.com/) |
| ODM            | [Mongoose](https://mongoosejs.com/) |
| Environment    | dotenv                 |
| Development    | Nodemon                |

---

## 🚀 Setup Instructions

Follow these steps to get the project up and running locally.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/humanchain-incident-log-api.git
cd humanchain-incident-log-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your actual MongoDB URI.

### 4. Start the Development Server
```bash
npm run dev
```

Server should be running on `http://localhost:5000`

### 5. (Optional) Seed Sample Data
```bash
node sampleData.js
```

This will populate the database with initial test incidents.

---

## 📡 API Endpoints

All endpoints are prefixed with `/incidents`.

### ➕ POST `/incidents`

Create a new incident.

#### Request Body:
```json
{
  "title": "AI misdiagnosed critical health issue",
  "description": "An AI model used in hospitals gave a wrong diagnosis leading to delayed surgery.",
  "severity": "high",
  "location": "New York, USA",
  "reportedBy": "Dr. Smith"
}
```

#### Response:
```json
{
  "_id": "64d9fefb1bd3c8f1fdf9133e",
  "title": "...",
  ...
}
```

---

### 📃 GET `/incidents`

Fetch all incidents in the database.

#### Response:
```json
[
  {
    "_id": "...",
    "title": "AI failed to detect fraud",
    "severity": "medium"
  },
  ...
]
```

---

### 🔍 GET `/incidents/:id`

Fetch a single incident by its unique ID.

#### Example:
```
GET /incidents/64d9fefb1bd3c8f1fdf9133e
```

#### Response:
```json
{
  "_id": "...",
  "title": "AI misinterpreted surveillance data",
  ...
}
```

---

### ❌ DELETE `/incidents/:id`

Delete an incident entry by ID.

#### Example:
```
DELETE /incidents/64d9fefb1bd3c8f1fdf9133e
```

#### Response:
```json
{ "message": "Incident deleted successfully." }
```

---

## 🗂 Incident Schema

```js
{
  title: String,             // Title of the incident
  description: String,       // Detailed description of the incident
  severity: String,          // low | medium | high
  location: String,          // Location where the incident occurred
  reportedBy: String,        // Person or organization who reported it
  reportedAt: Date           // Defaults to current timestamp
}
```

---

## 🛡️ Use Cases

- Maintain a log of AI safety incidents across industries
- Track severity trends and issue patterns
- Use for audit trails and compliance reports
- Enhance transparency for AI deployments

---

---

---
