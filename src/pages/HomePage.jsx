import React from "react";
import { Search, MapPin, TrendingUp, Store } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "/images/herobanner.webp";

const FEATURED_STORES = [
  { name: "Al Baik", initial: "albaik" },
  { name: "KFC", initial: "kfc" },
  { name: "Next Cash and Carry", initial: "next" },
  {
    name: "Market Square",
    initial: "market-square",
  },
];
export function HomePage({ featuredProducts }) {
  return (
    <div className="space-y-16">
      <section className="relative bg-green-600 py-32 sm:py-48">
        {/* <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroBanner}
            alt="Shopping background"
            className="w-full h-full object-cover opacity-10"
          />
        </div> */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <img
            src={heroBanner}
            alt="Modern shopping experience"
            className="w-full h-full object-cover object-[center_30%] "
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold w-full  mb-8 bg-gradient-to-r from-green-800 to-green-100 bg-clip-text text-transparent">
            Find Products in Supermarkets Near you
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-green-100 mb-4 sm:mb-6 md:mb-8">
            Locate items in stores across your city
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="search"
                placeholder="Search for products in supermarkets near you..."
                className="w-full pl-14 pr-4 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className=" hover:scale-105 transition-transform duration-300 ease-out absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-400 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stores Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Partner Stores
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {FEATURED_STORES.map((store, index) => (
              <Link
                to={`/stores/${store.initial}`}
                key={index}
                className="text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
                {/* <p className="text-gray-600">{store.location}</p> */}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className=" bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Products</h3>
              <p className="text-gray-600">
                Find items available in supermarkets near you
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Check Availability</h3>
              <p className="text-gray-600">
                See real-time stock in stores near you
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Store</h3>
              <p className="text-gray-600">
                Get directions and shop with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Items Near You
            </h2>
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image}
                  alt="Product"
                  className="w-full h-48 object-contain rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Available at {product.availableStores}
                  </p>
                  <div className="flex items-center text-sm text-green-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{product.nearestDistance} away</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
