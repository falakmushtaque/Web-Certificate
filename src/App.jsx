import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LogIn from "./pages/LogIn";

import Dashboard from "./pages/Dashboard";
import RevokeCertificate from "./pages/RevokeCertificate";
import Progress from "./pages/Progress";
import Results from "./pages/Results";
import AdminPanel from "./components/AdminPanel";
import SignUp from "./pages/SignUp";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";
import ViewCertificate from "./pages/ViewCertificate";
import PreViewCertificate from "./pages/PreViewCertificate";
import ActiveCertificates from "./pages/ActiveCertificates";
import ExpiryCertificates from "./pages/ExpiryCertificates";
import IssueCertificate from "./Pages/IssueCertificate";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  // Sidebar is 250px when open, 64px (w-16) when closed
  const sidebarWidth = isSidebarOpen ? 250 : 64;
  return (
    <div className="h-screen w-screen relative">
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{ marginLeft: sidebarWidth }} className="transition-all duration-300">
        <NavBar sidebarWidth={sidebarWidth} />
        <main className="p-4 pt-20 min-h-screen bg-gray-50">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="issue" element={<IssueCertificate />} />
            <Route path="revoke" element={<RevokeCertificate />} />
            <Route path="progress" element={<Progress />} />
            <Route path="results" element={<Results />} />
            <Route path="view-certificate" element={<ViewCertificate />} />
            <Route path="active-certificates" element={<ActiveCertificates/>} />
            <Route path="expiry-certificates" element={<ExpiryCertificates />} />
            <Route path="preview-certificate" element={<PreViewCertificate />} />
            <Route path="admin" element={<AdminPanel />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Dashboard and subroutes */}
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
