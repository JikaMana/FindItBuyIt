import React from "react";
import { LocationSelector } from "../components/LocationSelector";
import { StoreCard } from "../components/StoreCard";

const SAMPLE_STORES = [
  {
    id: "1",
    name: "SPAR - Lekki",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d",
    rating: 4.5,
    reviews: 128,
    address: "Circle Mall, Lekki-Epe Expressway, Lagos",
    distance: "2.5 km",
    hours: "Open until 9 PM",
    featured: [
      { name: "Golden Penny Rice", price: "25,000" },
      { name: "Peak Milk", price: "2,500" },
    ],
  },
  {
    id: "2",
    name: "Shoprite - Ikeja City Mall",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0",
    rating: 4.3,
    reviews: 256,
    address: "Alausa, Ikeja, Lagos",
    distance: "5.2 km",
    hours: "Open until 10 PM",
    featured: [
      { name: "Indomie Noodles", price: "4,500" },
      { name: "Power Oil", price: "3,200" },
    ],
  },
  // Add more stores as needed
];

export function StoresPage() {
  // const [view, setView] = (React.useState < "grid") | ("list" > "grid");
  // const [view, setView] = React.useState("grid");

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Stores Near You</h1>

        <LocationSelector />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_STORES.map((store) => (
            <StoreCard
              key={store.id}
              id
              name
              image
              rating
              reviews
              address
              distance
              hours
              featured
              featuredName={store.featured.name}
              featuredPrice={store.featured.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
