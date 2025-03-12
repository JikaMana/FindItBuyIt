import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Utensils,
  Tv,
  Home,
  Shirt,
  Apple,
  Baby,
  Gift,
  Dumbbell,
  Book,
} from "lucide-react";

const CATEGORIES = [
  {
    name: "Groceries",
    icon: ShoppingBag,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Food & Beverages",
    icon: Utensils,
    color: "bg-orange-100 text-orange-600",
  },
  { name: "Electronics", icon: Tv, color: "bg-blue-100 text-blue-600" },
  {
    name: "Home & Kitchen",
    icon: Home,
    color: "bg-purple-100 text-purple-600",
  },
  { name: "Fashion", icon: Shirt, color: "bg-pink-100 text-pink-600" },
  { name: "Fresh Produce", icon: Apple, color: "bg-red-100 text-red-600" },
  { name: "Baby Products", icon: Baby, color: "bg-yellow-100 text-yellow-600" },
  {
    name: "Gifts & Lifestyle",
    icon: Gift,
    color: "bg-green-300 text-green-800",
  },
  {
    name: "Sports & Fitness",
    icon: Dumbbell,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    name: "Books & Stationery",
    icon: Book,
    color: "bg-teal-100 text-teal-600",
  },
];

const FEATURED_CATEGORIES = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147",
    items: "2,500+ items",
    stores: "15 stores",
  },
  {
    name: "Groceries",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    items: "5,000+ items",
    stores: "25 stores",
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
    items: "3,000+ items",
    stores: "20 stores",
  },
];

export function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Browse Categories
        </h1>
        <p className="text-lg text-gray-600">
          Discover products across various categories from your favorite stores
        </p>
      </div>

      {/* Featured Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Categories
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_CATEGORIES.map((category) => (
            <Link
              key={category.name}
              to={`/search?category=${category.name.toLowerCase()}`}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-200">
                  {category.items} • {category.stores}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Categories Grid */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          All Categories
        </h2>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.name}
              to={`/search?category=${category.name.toLowerCase()}`}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4`}
              >
                <category.icon className=" sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-gray-900 font-medium text-center">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
