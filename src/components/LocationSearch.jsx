import React, { useEffect, useState } from "react";

const LocationSearch = ({ loc }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  const fetchLocation = async (searchTerm) => {
    if (searchTerm.length < 2) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&countrycodes=NG&q=${searchTerm}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    fetchLocation(value);
  };

  useEffect(() => {
    loc(query);
  }, [query]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter location"
        className="border p-2 w-full"
      />
      {suggestions.length > 0 && (
        <ul className="border mt-2 bg-white shadow-md max-h-40 overflow-auto">
          {suggestions.map((location) => (
            <li
              key={location.place_id}
              onClick={() => {
                location = location;
                setQuery(location.display_name);
                setSuggestions([]);
              }}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {location.display_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default LocationSearch;
