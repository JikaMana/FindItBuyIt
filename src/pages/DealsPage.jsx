import React from "react";
import { Link } from "react-router-dom";
import { Tag, Clock, Store, MapPin } from "lucide-react";

const DEALS = [
  {
    id: "1",
    title: "Buy 2 Get 1 Free on Golden Penny Products",
    store: "SPAR",
    location: "Lekki",
    validUntil: "2024-03-31",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    discount: "33%",
    category: "Groceries",
  },
  {
    id: "2",
    title: "20% Off All Electronics",
    store: "Shoprite",
    location: "Ikeja",
    validUntil: "2024-03-25",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147",
    discount: "20%",
    category: "Electronics",
  },
  {
    id: "3",
    title: "Weekend Special: 25% Off Fresh Produce",
    store: "Next Cash and Carry",
    location: "Abuja",
    validUntil: "2024-03-24",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    discount: "25%",
    category: "Fresh Produce",
  },
];

const CATEGORIES = [
  "All Deals",
  "Groceries",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Fresh Produce",
];
const STORES = [
  "All Stores",
  "SPAR",
  "Shoprite",
  "Next Cash and Carry",
  "Market Square",
];

export function DealsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Deals");
  const [selectedStore, setSelectedStore] = React.useState("All Stores");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Special Deals & Promotions
        </h1>
        <p className="text-lg text-gray-600">
          Discover the best offers from your favorite stores
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {STORES.map((store) => (
            <option key={store} value={store}>
              {store}
            </option>
          ))}
        </select>
      </div>

      {/* Deals Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEALS.map((deal) => (
          <Link
            key={deal.id}
            to={`/deals/${deal.id}`}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="relative">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full">
                <span className="font-bold">{deal.discount}</span> OFF
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-green-600 mb-2">
                <Tag className="w-4 h-4 mr-1" />
                <span>{deal.category}</span>
              </div>
              <h3 className="h-12 text-lg font-semibold text-gray-900 mb-4">
                {deal.title}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Store className="w-4 h-4 mr-2" />
                  <span>{deal.store}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{deal.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>
                    Valid until {new Date(deal.validUntil).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition-colors">
                View Deal
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
