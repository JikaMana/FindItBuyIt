import React from "react";
import { MapPin, Filter, ArrowUpDown, Store } from "lucide-react";

const CITIES = ["Lagos", "Abuja", "Port Harcourt"];
const STORES = ["Shoprite", "SPAR", "Next Cash and Carry", "Market Square"];

export function SearchResults() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Search Results for "rice"
          </h1>
          <p className="text-gray-600">Showing 24 results within Lagos</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
            <option value="">All Cities</option>
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
            <option value="">All Stores</option>
            {STORES.map((store) => (
              <option key={store} value={store}>
                {store}
              </option>
            ))}
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <ArrowUpDown className="w-5 h-5" />
            <span>Sort</span>
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={`https://images.unsplash.com/photo-${
                i + 600
              }?auto=format&fit=crop&w=500`}
              alt="Product"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                Golden Penny Rice
              </h3>
              <p className="text-lg font-bold text-gray-900 mb-2">₦25,000</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Store className="w-4 h-4 mr-2" />
                  <span>Available at SPAR</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>2.5 km away</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-3 py-2 rounded-md ${
                page === 1
                  ? "bg-green-600 text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
