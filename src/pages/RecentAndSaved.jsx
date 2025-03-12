import { Search } from "lucide-react";
import React from "react";

const RecentAndSaved = () => {
  const recentSearch = [
    { product: "Wireless Headphones", lastSearched: 2, distance: 5 },
    { product: "Bluetooth Dongle", lastSearched: 3, distance: 12 },
    { product: "Iphone 16 pro max", lastSearched: 3, distance: 2 },
    { product: "HP Elitebook 840 G5", lastSearched: 6, distance: 10 },
  ];
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Searches</h2>
      <div className="space-y-4">
        {recentSearch.map((search) => (
          <div
            key={search.product}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                <Search className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {search.product}
                </h3>
                <p className="text-sm text-gray-600">
                  Searched {search.lastSearched} days ago • {search.distance}{" "}
                  mile radius
                </p>
              </div>
            </div>
            <button className="text-green-800 hover:text-green-700">
              Search Again
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAndSaved;
