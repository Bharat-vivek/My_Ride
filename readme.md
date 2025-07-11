# My-Ride Project

This repository contains a full-stack Uber clone application, featuring a **React + Vite frontend** and a **Node.js + Express backend**. The project demonstrates user authentication, ride booking, real-time updates, and more.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Frontend Overview](#frontend-overview)
- [Backend Overview](#backend-overview)
- [Getting Started](#getting-started)
- [License](#license)

---

## Features

- User and Captain registration & login
- Location search and ride booking
- Vehicle selection and fare calculation
- Real-time ride status updates via Socket.io
- JWT-based authentication
- RESTful API endpoints

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Socket.io-client
- **Backend:** Node.js, Express, MongoDB, Socket.io, JWT

---

## Project Structure

```
Uber/
├── frontend/    # React + Vite client app
│   ├── src/
│   ├── public/
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── ...
├── backend/     # Node.js + Express server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── server.js
│   └── ...
├── README.md    # Main documentation
```

---

## Frontend Overview

- Built with **React** and **Vite** for fast development.
- **Tailwind CSS** for utility-first styling.
- **Socket.io-client** for real-time ride and driver updates.
- Organized into components, pages, contexts, and assets.
- Environment variables managed via `.env` (e.g., API and Socket URLs).

**Key Folders:**
- `src/components/` — Reusable UI elements
- `src/pages/` — Main app pages (Home, Login, Register, etc.)
- `src/context/` — Global state management (User, Socket)
- `src/assets/` — Images and icons

See [`frontend/README.md`](./frontend/README.md) for more details.

---

## Backend Overview

- Built with **Node.js** and **Express**.
- **MongoDB** for data storage (users, captains, rides, tokens).
- **JWT** for authentication and session management.
- **Socket.io** for real-time communication.
- Organized into controllers, models, routes, services, and middlewares.

**Key Folders:**
- `controllers/` — Request handlers for users, captains, rides
- `models/` — Mongoose schemas for data
- `routes/` — API route definitions
- `services/` — Business logic
- `middlewares/` — Auth and validation

See [`backend/README.md`](./backend/README.md) for more details.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/uber-clone.git
cd uber-clone
```

### 2. Setup Backend

```bash
cd backend
npm install
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Environment Variables

- Configure `.env` files in both `frontend` and `backend` for API URLs, database, and sockets.

---

## License

This project is for educational purposes