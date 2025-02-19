# Online Appointment Booking System

A web-based appointment scheduling system that allows users to book appointments with doctors efficiently. Built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB, it provides an intuitive interface and secure backend management.

## Features

### User Features
- **Doctor Filtering**: Easily search and filter doctors by specialty.
- **Appointment Booking**: Schedule appointments with available doctors.

### Admin Dashboard
- **Doctor Management**: Add, update, and remove doctor profiles.
- **Appointment Oversight**: Manage all scheduled appointments.

### Doctor Dashboard
- **Profile Management**: Update personal details and availability.
- **Appointment Handling**: View and manage patient bookings.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Admin Panel**: Built with React.js and Tailwind CSS for efficient management

## Directory Structure
```
└── harshmaniar1804-bookmydoctor/
    ├── README.md
    ├── admin/
    │   ├── README.md
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── tailwind.config.js
    │   ├── vercel.json
    │   ├── vite.config.js
    │   ├── .eslintrc.cjs
    │   ├── .gitignore
    │   └── src/
    │       ├── App.jsx
    │       ├── index.css
    │       ├── main.jsx
    │       ├── components/
    │       │   ├── Navbar.jsx
    │       │   ├── Sidebar.jsx
    │       ├── pages/
    │           ├── Dashboard.jsx
    │           ├── AddDoctor.jsx
    │           ├── DoctorsList.jsx
    │           ├── AllAppointments.jsx
    ├── backend/
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.js
    │   ├── config/
    │   │   ├── cloudinary.js
    │   │   ├── mongodb.js
    │   ├── controllers/
    │   │   ├── adminController.js
    │   │   ├── doctorController.js
    │   │   ├── userController.js
    │   ├── middleware/
    │   │   ├── authAdmin.js
    │   │   ├── authDoctor.js
    │   │   ├── authUser.js
    │   ├── models/
    │   │   ├── appointmentModel.js
    │   │   ├── doctorModel.js
    │   │   ├── userModel.js
    │   ├── routes/
    │       ├── adminRoute.js
    │       ├── doctorRoute.js
    │       ├── userRoute.js
    ├── frontend/
    │   ├── README.md
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── tailwind.config.js
    │   ├── vercel.json
    │   ├── vite.config.js
    │   ├── .gitignore
    │   └── src/
    │       ├── App.jsx
    │       ├── index.css
    │       ├── main.jsx
    │       ├── components/
    │       │   ├── Navbar.jsx
    │       │   ├── Footer.jsx
    │       │   ├── Header.jsx
    │       ├── pages/
    │           ├── Home.jsx
    │           ├── Doctors.jsx
    │           ├── Appointment.jsx
    │           ├── MyAppointments.jsx
    │           ├── MyProfile.jsx
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshManiar1804/bookmydoctor
   ```
2. Navigate to the project directory:
   ```bash
   cd harshmaniar1804-bookmydoctor
   ```
3. Install dependencies for frontend, backend, and admin panel:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ../admin
   npm install
   ```
4. Set up environment variables in a `.env` file inside the `backend` directory:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```
5. Start the backend server:
   ```bash
   npm start
   ```
6. Start the frontend application:
   ```bash
   cd frontend
   npm run dev
   ```
7. Start the admin panel:
   ```bash
   cd admin
   npm run dev
   ```

## Usage
- Users can browse doctors, filter by specialty, and book appointments.
- Admins can manage doctor profiles and oversee all appointments.
- Doctors can view and update their availability and scheduled appointments.


## Demo Video
[Watch the Demo](https://youtu.be/AjtsG_z-0Yc?si=ugRIDql1QUj7Sgrb)

## Screenshot
<img width="1469" alt="Screenshot 2025-02-19 at 3 03 38 PM" src="https://github.com/user-attachments/assets/a9dc23e8-6651-41a0-bf43-12afeaf7faef" />


## Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.

## Contact
For any queries, feel free to reach out:
- **Email**: harshmaniarofficial@gmail.com
- **GitHub**: [HarshManiar1804](https://github.com/HarshManiar1804)
- **LinkedIn**: [Harsh Maniar](https://www.linkedin.com/in/harshmaniar210/)

