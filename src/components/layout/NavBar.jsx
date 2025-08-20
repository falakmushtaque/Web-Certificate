import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Bell, ChevronDown, LogOut, User } from "lucide-react";

const NavBar = ({ sidebarWidth = 250 }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 z-50 bg-white shadow-sm border-b border-gray-200"
      style={{ left: sidebarWidth, right: 0 }}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <Link to="/dashboard" className="text-xl font-bold text-gray-900">
          WCAMAN
        </Link>
        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Notification Icon */}
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-900" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {/* Auth Links (show if not logged in) */}
          <div className="hidden sm:flex gap-3">
            <Link to="/login" className="text-gray-700 hover:text-gray-900 transition">
              Login
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-gray-900 transition">
              Sign Up
            </Link>
          </div>
          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-800 font-semibold">
                F
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md z-50">
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Link>
                <button
                  onClick={() => alert("Logging out...")}
                  className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
