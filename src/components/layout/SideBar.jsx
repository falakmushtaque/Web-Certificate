import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ShieldCheck, Ban, Loader, Award, Users,FileSearch, BadgeCheck , Eye} from "lucide-react";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  { to: "/issue", label: "Issue Certificate", icon: <ShieldCheck /> },
  { to: "/revoke", label: "Revoke Certificate", icon: <Ban /> },
  { to: "/progress", label: "Progress", icon: <Loader /> },
  { to: "/results", label: "Results", icon: <Award /> },
  { to: "/view-certificate", label: "View Certificate", icon: <FileSearch /> },
  { to: "/active-certificates", label: "Active Certificates", icon: <BadgeCheck /> },
  { to: "/expiry-certificates", label: "Expiry Certificates", icon: <Ban /> },
  { to: "/preview-certificate", label: "Preview Certificate", icon: <Eye /> },
  { to: "/admin", label: "Admin Panel", icon: <Users /> },
];

const SideBar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-gray-800 text-white transition-all duration-300 z-40 ${
        isOpen ? 'w-[250px]' : 'w-16'
      } flex flex-col items-center`}
    >
      {/* Sidebar Toggle Button - always visible at the top */}
      <button
        onClick={toggleSidebar}
        className={
          isOpen
            ? "absolute top-4 right-4 z-50 p-2 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none text-gray-800"
            : "mt-4 p-2 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none text-gray-700"
        }
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      <nav className={`flex-1 w-full ${isOpen ? 'mt-16' : 'mt-5'} pt-0`}>
        <ul className={`space-y-2 flex flex-col ${isOpen ? 'items-start pl-4 pr-2' : 'items-center'}`}>
          {links.map((link) => (
            <li key={link.to} className="w-full">
              <Link
                to={link.to}
                className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition w-full ${
                  location.pathname === link.to ? "bg-gray-800" : ""
                } ${isOpen ? 'justify-start' : 'justify-center'}`}
              >
                <span className="w-5 h-5 flex items-center justify-center">{link.icon}</span>
                {isOpen && <span className="text-sm">{link.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
