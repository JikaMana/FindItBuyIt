import React from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { ProductFilters } from "../components/ProductFilters";

const STORE_DATA = {
  id: "1",
  name: "SPAR - Lekki",
  image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d",
  coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  rating: 4.5,
  reviews: 128,
  address: "Circle Mall, Lekki-Epe Expressway, Lagos",
  distance: "2.5 km",
  hours: {
    monday: "9:00 AM - 9:00 PM",
    tuesday: "9:00 AM - 9:00 PM",
    wednesday: "9:00 AM - 9:00 PM",
    thursday: "9:00 AM - 9:00 PM",
    friday: "9:00 AM - 10:00 PM",
    saturday: "10:00 AM - 10:00 PM",
    sunday: "10:00 AM - 8:00 PM",
  },
  phone: "+234 123 456 7890",
  email: "lekki@spar.com.ng",
  website: "www.spar.com.ng",
  social: {
    facebook: "sparNigeria",
    instagram: "sparNigeria",
    twitter: "sparNigeria",
  },
  description:
    "SPAR Lekki is a premium retail destination offering a wide range of quality products including groceries, fresh produce, electronics, home essentials, and more. Our store is designed to provide a comfortable shopping experience with trained staff ready to assist you.",
  amenities: [
    "Parking Available",
    "Wheelchair Accessible",
    "ATM Available",
    "Free Wi-Fi",
    "Customer Service Desk",
    "Return/Exchange Counter",
  ],
  departments: [
    "Groceries",
    "Fresh Produce",
    "Bakery",
    "Electronics",
    "Home & Kitchen",
    "Fashion",
    "Beauty & Health",
  ],
};

const PRODUCTS = [
  {
    id: "1",
    name: "Golden Penny Rice",
    price: 25000,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    category: "Groceries",
    inStock: true,
  },
  {
    id: "2",
    name: "Peak Milk Powder",
    price: 2500,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    category: "Groceries",
    inStock: true,
  },
  {
    id: "3",
    name: "Power Oil 5L",
    price: 8500,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
    category: "Groceries",
    inStock: true,
  },
  {
    id: "4",
    name: "Indomie Noodles (40 Pack)",
    price: 4500,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
    category: "Groceries",
    inStock: true,
  },
];

export function StoreDetailsPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = React.useState("products");
  const [selectedDepartment, setSelectedDepartment] = React.useState("all");

  return (
    <div className="bg-gray-50">
      {/* Store Header */}
      <div className="relative h-64 md:h-96">
        <img
          src={STORE_DATA.coverImage}
          alt={STORE_DATA.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end">
            <div className="pb-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{STORE_DATA.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{STORE_DATA.rating}</span>
                  <span className="ml-1 text-gray-300">
                    ({STORE_DATA.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5" />
                  <span className="ml-1">{STORE_DATA.distance}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Store Info Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{STORE_DATA.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <div>
                    <div className="font-medium">Today</div>
                    <div>{STORE_DATA.hours.monday}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{STORE_DATA.phone}</span>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href={`https://facebook.com/${STORE_DATA.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`https://instagram.com/${STORE_DATA.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/${STORE_DATA.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Departments</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedDepartment("all")}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    selectedDepartment === "all"
                      ? "bg-green-50 text-green-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  All Departments
                </button>
                {STORE_DATA.departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      selectedDepartment === dept
                        ? "bg-green-50 text-green-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab("products")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "products"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => setActiveTab("about")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "about"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "reviews"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Reviews
                </button>
              </nav>
            </div>

            {/* Products Tab */}
            {activeTab === "products" && (
              <div>
                <ProductFilters />
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PRODUCTS.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-gray-900 mt-1">
                          ₦{product.price.toLocaleString()}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span
                            className={`text-sm ${
                              product.inStock
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === "about" && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    About {STORE_DATA.name}
                  </h3>
                  <p className="text-gray-600">{STORE_DATA.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Store Hours</h3>
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    {Object.entries(STORE_DATA.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize text-gray-600">{day}</span>
                        <span className="text-gray-900">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Amenities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {STORE_DATA.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center py-12">
                  <p className="text-gray-500">Reviews coming soon!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
