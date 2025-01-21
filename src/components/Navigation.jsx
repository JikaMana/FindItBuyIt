import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Store,
  Grid,
  Tag,
  Search,
  ShoppingCart,
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
  const [currentPage, setCurrentPage] = useState("Home");
  const location = useLocation();

  const getCurrentPage = () => {
    switch (location.pathname) {
      case "/":
        return "home";
      case "/stores":
        return "stores";
      case "/categories":
        return "categories";
      case "/deals":
        return "deals";
      default:
        break;
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
              to="/cart"
              className="flex items-center text-gray-700 hover:text-green-600"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </Link>
            <Link
              to="/profile"
              className="flex items-center text-gray-700 hover:text-green-600"
            >
              <User className="w-6 h-6" />
            </Link>
            <Link
              to="/help"
              className="flex items-center text-gray-700 hover:text-green-600"
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
              <ShoppingCart className="w-5 h-5 mr-2" />
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
