import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Store,
  Grid,
  Tag,
  Heart,
  User,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Store, label: "Stores", path: "/stores" },
  { icon: Grid, label: "Categories", path: "/categories" },
  { icon: Tag, label: "Deals", path: "/deals" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getCurrentPage = () => {
    switch (true) {
      case location.pathname.startsWith("/stores"):
        return "stores";
      case location.pathname.startsWith("/categories"):
        return "categories";
      case location.pathname.startsWith("/deals"):
        return "deals";
      case location.pathname.startsWith("/recents"):
        return "recents";
      case location.pathname.startsWith("/help"):
        return "help";
      case location.pathname.startsWith("/profile"):
        return "profile";
      case location.pathname === "/":
        return "home";
      default:
        return "unknown";
    }
  };

  getCurrentPage();
  // alert(getCurrentPage());

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center text-gray-700 px-3 py-2 text-sm font-medium  hover:text-green-600 ${
                  getCurrentPage() === item.label.toLowerCase()
                    ? "text-green-600"
                    : ""
                }`}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/recents"
              className={`flex items-center text-gray-700 hover:text-green-600 ${
                getCurrentPage() === "recents" ? "text-green-600" : ""
              }`}
            >
              <Heart className="w-6 h-6" />
            </Link>

            <Link
              to="/help"
              className={`flex items-center text-gray-700 hover:text-green-600 ${
                getCurrentPage() === "help" ? "text-green-600" : ""
              }`}
            >
              <HelpCircle className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </Link>
            ))}
            <Link
              to="/cart"
              className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Heart className="w-5 h-5 mr-2" />
              Cart
            </Link>
            <Link
              to="/profile"
              className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-5 h-5 mr-2" />
              Profile
            </Link>
            <Link
              to="/help"
              className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Help
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
