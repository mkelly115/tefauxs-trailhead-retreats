# 🌲 Tefaux's Trailhead Retreats

A modern cabin booking and management platform inspired by hospitality management systems. Tefaux's Trailhead Retreats allows users to browse luxury cabins, make reservations, and provides administrators with powerful tools to manage bookings, guests, and business performance through an intuitive dashboard.

---

## 📖 Overview

Tefaux's Trailhead Retreats was built as a full-stack React application to demonstrate modern frontend architecture, state management, authentication, and real-world CRUD operations. The project emphasizes responsive design, reusable components, and scalable application structure while integrating cloud-based backend services.

The application includes both a customer-facing booking experience and an administrative portal for managing reservations, cabins, guests, and business analytics.

---

## ✨ Features

### Guest Features

* Browse available cabins
* View cabin details and amenities
* Create and manage reservations
* Responsive design for desktop and mobile devices

### Administration

* Secure user authentication
* Cabin management (Create, Read, Update, Delete)
* Booking management
* Guest management
* Business dashboard with key performance metrics
* Settings management

### User Experience

* Protected routes
* Form validation
* Loading states
* Error boundaries
* Toast notifications
* Optimistic UI updates
* Responsive layout

---

## 🛠 Tech Stack

### Frontend

* React
* React Router
* Styled Components
* React Hook Form
* React Query (TanStack Query)
* React Hot Toast
* React Icons
* Date-fns

### Backend & Services

* Supabase

  * Authentication
  * PostgreSQL Database
  * Storage
* REST API integration

### Development Tools

* Vite
* ESLint
* Git & GitHub

---

## 📊 Dashboard Features

The admin dashboard provides business insights including:

* Total bookings
* Revenue tracking
* Occupancy metrics
* Recent reservations
* Guest activity
* Booking status overview

---

## 🔒 Authentication

Authentication is handled through Supabase Authentication.

Authorized users can:

* Sign in securely
* Access protected administrative pages
* Manage business data
* Update account information

---

## 📁 Project Structure

```
src/
│
├── features/
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── check-in-out/
│   ├── dashboard/
|   └── settings/
│
├── hooks/
├── pages/
├── services/
├── styles/
├── ui/
└── utils/
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/tefauxs-trailhead-retreats.git
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

Configure your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

### Run the development server

```bash
npm run dev
```

---

## 📸 Screenshots


 ![App Dashboard](src/images/Screenshot%202026-08-04%20160000.png)
---
 ![App Cabins](src/images/Screenshot%202026-08-04%20160046.png)
---
 ![App Settings](src/images/Screenshot%202026-08-04%20160059.png)


---

## 🎯 What I Learned

This project strengthened my experience with:

* Building scalable React applications
* Component-driven architecture
* State management using React Query
* Authentication and authorization
* CRUD operations with Supabase
* Responsive UI development
* Custom hooks
* Error handling
* Performance optimization
* Managing asynchronous data
* Reusable component design

---

## 🔮 Future Improvements

* Customer self-service booking portal
* Online payment integration
* Email confirmations
* Search and filtering
* Calendar availability view
* Booking cancellations
* Role-based permissions
* Dark mode
* Unit and integration testing

---

## 👨‍💻 Author

**Michael Kelly**

Full-Stack JavaScript Developer with a passion for building modern web applications that combine thoughtful user experience with scalable architecture.

GitHub: https://github.com/mkelly115

LinkedIn: https://www.linkedin.com/in/michael-andrew-kelly/
