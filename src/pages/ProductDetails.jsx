import React from "react";
import { MapPin, Store, Clock, Phone, ExternalLink } from "lucide-react";

const STORES = [
  {
    name: "SPAR",
    branch: "Lekki",
    address: "Circle Mall, Lekki-Epe Expressway, Lagos",
    distance: "2.5",
    hours: "Open until 9 PM",
    stock: 15,
  },
  {
    name: "Shoprite",
    branch: "Ikeja City Mall",
    address: "Alausa, Ikeja, Lagos",
    distance: "5.2",
    hours: "Open until 10 PM",
    stock: 8,
  },
  {
    name: "Market Square",
    branch: "Victoria Island",
    address: "Adeola Odeku Street, Victoria Island, Lagos",
    distance: "7.1",
    hours: "Open until 8 PM",
    stock: 3,
  },
];

export function ProductDetails() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
              alt="Product"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <button
                key={i}
                className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    i + 700
                  }?auto=format&fit=crop&w=200`}
                  alt="Product thumbnail"
                  className="w-full h-full object-center object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Golden Penny Premium Rice
            </h1>
            <p className="text-2xl font-bold text-gray-900">₦25,000</p>
          </div>

          <div className="border-t border-b border-gray-200 py-6">
            <h2 className="text-lg font-semibold mb-4">Available Nearby</h2>
            <div className="space-y-4">
              {STORES.map((store, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:border-green-500 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {store.name} - {store.branch}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {store.address}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{store.distance} km</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{store.hours}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-semibold mb-1">
                        In Stock
                      </div>
                      <div className="text-sm text-gray-600">
                        {store.stock} available
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition-colors">
                      Get Directions
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-50">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-50">
                      <ExternalLink className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <div className="prose prose-sm text-gray-600">
              <p>
                Premium quality Nigerian rice, perfect for all your cooking
                needs. Features include:
              </p>
              <ul className="list-disc pl-4 mt-2">
                <li>100% locally sourced</li>
                <li>Stone-free</li>
                <li>50kg bag</li>
                <li>Long grain</li>
                <li>Premium quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
