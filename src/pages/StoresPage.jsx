import React from "react";
import { LocationSelector } from "../components/LocationSelector";
import { StoreCard } from "../components/StoreCard";
import sparLekki from "../images/stores/spar-lekki.png";
import nextCashAndCarry from "../images/stores/next-ph.png";
import jabiLakeMall from "../images/stores/jabi-lake-mall.png";

const SAMPLE_STORES = [
  {
    id: "1",
    name: "SPAR - Lekki",
    image: sparLekki,
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
    name: "Next Cash and Carry - Port Harcourt",
    image: nextCashAndCarry,
    rating: 4.3,
    reviews: 256,
    address: "Trans Amadi, Port Harcourt, Rivers State",
    distance: "5.2 km",
    hours: "Open until 10 PM",
    featured: [
      { name: "Indomie Noodles", price: "4,500" },
      { name: "Power Oil", price: "3,200" },
    ],
  },
  {
    id: "2",
    name: "Jabi Lake Mall(Shoprite) - Abuja",
    image: jabiLakeMall,
    rating: 4.3,
    reviews: 256,
    address: "Jabi, Abuja",
    distance: "4.1 km",
    hours: "Open until 11 PM",
    featured: [
      { name: "Iphone 16 pro man", price: "4,200,500" },
      { name: "Macbook pro", price: "1,200,00" },
    ],
  },
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
              id={store.id}
              name={store.name}
              image={store.image}
              rating={store.rating}
              reviews={store.reviews}
              address={store.address}
              distance={store.distance}
              hours={store.hours}
              featured={store.featured}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
