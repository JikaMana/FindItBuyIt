import React from "react";
import {
  MapPin,
  Settings,
  Bell,
  History,
  TrashIcon,
  PlusIcon,
  Search,
} from "lucide-react";

export function UserProfile() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-indigo-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-600">JM</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Jika Mana</h2>
              <p className="text-gray-600">jikamana2000@gmail.com</p>
            </div>
            <nav className="space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-md bg-gray-50">
                <MapPin className="w-5 h-5" />
                <span>Saved Locations</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50">
                <History className="w-5 h-5" />
                <span>Search History</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Saved Locations */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Saved Locations
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((location) => (
                <div
                  key={location}
                  className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {location === 1
                        ? "Home"
                        : location === 2
                        ? "School"
                        : "Other"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Housing Estate, Oyigbo, Rivers state
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:text-indigo-600">
                      <Settings className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-600">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              <button className="w-full mt-4 border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-indigo-500 hover:text-indigo-600 transition-colors">
                <div className="flex items-center justify-center space-x-2">
                  <PlusIcon className="w-5 h-5" />
                  <span>Add New Location</span>
                </div>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
