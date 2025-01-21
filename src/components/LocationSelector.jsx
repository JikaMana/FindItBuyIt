import React from "react";
import { MapPin } from "lucide-react";
import { useGeolocation } from "../hooks/useGeolocation";

const CITIES = [
  { name: "Port Harcourt", areas: ["GRA", "Trans Amadi", "Diobu", "Borokiri"] },
  { name: "Lagos", areas: ["Lekki", "Victoria Island", "Ikeja", "Surulere"] },
  { name: "Abuja", areas: ["Wuse", "Garki", "Maitama", "Asokoro"] },
];

export function LocationSelector() {
  const { latitude, longitude, loading, error } = useGeolocation();
  const [selectedCity, setSelectedCity] = React.useState("");
  const [selectedArea, setSelectedArea] = React.useState("");

  const areas = CITIES.find((city) => city.name === selectedCity)?.areas || [];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <MapPin className="w-5 h-5 text-green-600" />
        <div className="flex-1 space-y-2">
          {loading ? (
            <div className="animate-pulse h-8 bg-gray-200 rounded"></div>
          ) : error ? (
            <div className="text-sm text-red-600">{error}</div>
          ) : latitude && longitude ? (
            <div className="text-sm text-gray-600">
              Using your current location
            </div>
          ) : null}
          <div className="flex space-x-2">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {CITIES.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select Area</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
