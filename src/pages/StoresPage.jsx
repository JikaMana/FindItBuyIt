import React, { useEffect, useState } from "react";
import { LocationSelector } from "../components/LocationSelector";
import { StoreCard } from "../components/StoreCard";
import sparLekki from "../images/stores/spar-lekki.png";
import nextCashAndCarry from "../images/stores/next-ph.png";
import jabiLakeMall from "../images/stores/jabi-lake-mall.png";
import shopriteWarri from "../images/stores/shoprite-warri.png";
import abuadMall from "../images/stores/abuad-shopping-mall.png";
import marketSquare from "../images/stores/market-square.png";
import { Search } from "lucide-react";

const SAMPLE_STORES = [
  {
    id: "1",
    name: "SPAR - Lekki",
    initial: "spar-lekki",
    image: sparLekki,
    rating: 4.7,
    reviews: 1679,
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
    initial: "next-ph",
    image: nextCashAndCarry,
    rating: 4.8,
    reviews: 895,
    address: "Trans Amadi, Port Harcourt, Rivers State",
    distance: "5.2 km",
    hours: "Open until 10 PM",
    featured: [
      { name: "Indomie Noodles", price: "4,500" },
      { name: "Power Oil", price: "3,200" },
    ],
  },
  {
    id: "3",
    name: "ABUAD MALL - Ekiti",
    initial: "abuad-mall",

    image: abuadMall,
    rating: 3.8,
    reviews: 97,
    address: "Igbodogi, Ado-Ekiti, Delta",
    distance: "0.6 km",
    hours: "Open until 10 PM",
    featured: [{ name: "Nivea Creme", price: "2,500" }],
  },
  {
    id: "4",
    name: "Jabi Lake Mall(Shoprite) - Abuja",
    initial: "jabi-lake-mall",
    image: jabiLakeMall,
    rating: 4.9,
    reviews: 1007,
    address: "Jabi, Abuja",
    distance: "4.1 km",
    hours: "Open until 11 PM",
    featured: [
      { name: "Iphone 16 pro man", price: "4,200,500" },
      { name: "Macbook pro", price: "1,200,00" },
    ],
  },
  {
    id: "5",
    name: "Shoprite - Delta",
    initial: "shoprite-warri",
    image: shopriteWarri,
    rating: 4.3,
    reviews: 429,
    address: "Warri, Delta",
    distance: "12 km",
    hours: "Open until 10 PM",
    featured: [
      { name: "PlayStation 4", price: "620,00" },
      { name: "Nivea Creme", price: "2,500" },
    ],
  },
  {
    id: "6",
    name: "Market Square - Port Harcourt",
    initial: "market-square-ph-gra",
    image: marketSquare,
    rating: 4.3,
    reviews: 240,
    address: "Trans Amadi, Port Harcourt, Rivers State",
    distance: "5.5 km",
    hours: "Open until 12 AM",
    featured: [
      { name: "Bread", price: "2,200" },
      { name: "Fanice Ice Cream", price: "2,600" },
    ],
  },
];

export function StoresPage() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Stores Near You</h1>
        <div className="hidden sm:flex flex-1 max-w-md">
          <div className="w-full relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for available stores"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <LocationSelector />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_STORES.filter((store) =>
            store.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
            .map((store) => (
              <StoreCard
                key={store.id}
                id={store.id}
                name={store.name}
                initial={store.initial}
                image={store.image}
                rating={store.rating}
                reviews={store.reviews}
                address={store.address}
                distance={store.distance}
                hours={store.hours}
                featured={store.featured}
              />
            ))
            .filter((store) => store.name !== searchQuery)}
        </div>
      </div>
    </div>
  );
}
