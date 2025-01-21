import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, ChevronRight } from "lucide-react";

export function StoreCard({
  id,
  name,
  image,
  rating,
  reviews,
  address,
  distance,
  hours,
  featured,
}) {
  return (
    <Link
      to={`/stores/${id}`}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-gray-500">({reviews})</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

        <div className="mt-2 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{address}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{hours}</span>
          </div>
        </div>

        {featured.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Featured Products
            </h4>
            <div className="space-y-2">
              {featured.map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{product.name}</span>
                  <span className="text-sm font-medium">₦{product.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between text-green-600 hover:text-green-500">
          <span className="text-sm font-medium">View Store</span>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}
