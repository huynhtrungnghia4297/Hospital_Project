// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./admin/AdminLayout";
import PatientDashboard from "./admin/admincomponents/PatientDashboard";
import DoctorDashboard from "./admin/admincomponents/DoctorDashboard";
import Calendar from "./admin/admincomponents/Calendar";
import Login from "./Login";
import HospitalDashboard from "./admin/admincomponents/HospitalDashboard";
import Patient from "./admin/admincomponents/patients/Patient";
import PatientDetails from "./admin/admincomponents/patients/PatientDetails";
import Report from "./admin/admincomponents/Report";
import DoctorList from "./admin/admincomponents/doctors/DoctorList";
import DoctorDetail from "./admin/admincomponents/doctors/DoctorDetail";
import Doctor from "./admin/admincomponents/doctors/Doctor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<PatientDashboard />} />
          <Route path="doctordashboard" element={<DoctorDashboard />} />
          <Route path="appointment" element={<Calendar />} />
          <Route path="hospitaldashboard" element={<HospitalDashboard />} />
          <Route path="patient" element={<Patient />} />
          <Route path="patientdetail" element={<PatientDetails />} />
          <Route path="report" element={<Report />} />
          <Route path="doctorlist" element={<DoctorList />} />
          <Route path="doctordetail" element={<DoctorDetail />} />
          <Route path="doctor" element={<Doctor />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
