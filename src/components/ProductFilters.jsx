import React from "react";
import { Filter as FilterIcon, X } from "lucide-react";

// Price ranges
const PRICE_RANGES = [
  { label: "Under ₦5,000", value: "0-5000" },
  { label: "₦5,000 - ₦10,000", value: "5000-10000" },
  { label: "₦10,000 - ₦20,000", value: "10000-20000" },
  { label: "Over ₦20,000", value: "20000-above" },
];

// Categories
const CATEGORIES = [
  { label: "Groceries", value: "groceries" },
  { label: "Electronics", value: "electronics" },
  { label: "Home & Kitchen", value: "home-kitchen" },
  { label: "Fashion", value: "fashion" },
];

// Sort options
const SORT_OPTIONS = [
  { label: "Popularity", value: "popularity" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest First", value: "newest" },
  { label: "Rating", value: "rating" },
  { label: "Distance", value: "distance" },
];

export function ProductFilters() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    priceRange: "",
    category: "",
    rating: "",
    availability: false,
    sortBy: "popularity",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      priceRange: "",
      category: "",
      rating: "",
      availability: false,
      sortBy: "popularity",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 text-gray-700"
          >
            <FilterIcon className="w-5 h-5" />
            <span>Filters</span>
          </button>
          {Object.values(filters).some(Boolean) && (
            <button
              onClick={clearFilters}
              className="text-sm text-green-600 hover:text-green-500"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="p-4 space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Price Range
            </h3>
            <div className="space-y-2">
              {PRICE_RANGES.map((range) => (
                <label key={range.value} className="flex items-center">
                  <input
                    type="radio"
                    name="price-range"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={(e) =>
                      handleFilterChange("priceRange", e.target.value)
                    }
                    className="h-4 w-4 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <label key={category.value} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category.value}
                    checked={filters.category === category.value}
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                    className="h-4 w-4 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {category.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.availability}
                onChange={(e) =>
                  handleFilterChange("availability", e.target.checked)
                }
                className="h-4 w-4 text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-600">In Stock Only</span>
            </label>
          </div>

          {/* Sort By */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Sort By</h3>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange("sortBy", e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
