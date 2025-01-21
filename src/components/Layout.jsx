import React from "react";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/images/FindItBuyItLogo.png";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - h-16 for desktop, h-14 for mobile */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-14">
            <div className="flex items-center">
              <button className="sm:hidden p-2" aria-label={"Menu"}>
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
              <Link to="/" className="flex items-center space-x-2">
                <ShoppingBag className="w-8 h-8 text-green-600" />
                <span className="text-xl font-bold text-gray-900">
                  FindItBuyIt
                </span>
              </Link>
            </div>

            <div className="hidden sm:flex flex-1 max-w-2xl mx-8">
              <div className="w-full relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search products in supermarkets near you..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="p-2 text-gray-700 hover:text-green-600"
              >
                <User className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search - Only visible on mobile */}
      <div className="sm:hidden fixed top-16 w-full bg-white shadow-sm z-40 px-4 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="search"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Main Content - Adjust padding-top based on header height */}
      <main className="pt-32 sm:pt-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                About
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    About FindItBuyIt
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Partner Stores
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="place-self-end">
              <img src={Logo} alt="Logo" className=" h-24" />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Currently available in Lagos, Abuja, and Port Harcourt
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
