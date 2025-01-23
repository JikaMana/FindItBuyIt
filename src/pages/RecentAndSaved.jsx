import { Search } from "lucide-react";
import React from "react";

const RecentAndSaved = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Searches</h2>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((search) => (
          <div
            key={search}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                <Search className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Wireless Headphones
                </h3>
                <p className="text-sm text-gray-600">
                  Searched 2 days ago • 5 mile radius
                </p>
              </div>
            </div>
            <button className="text-indigo-600 hover:text-indigo-500">
              Search Again
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAndSaved;
