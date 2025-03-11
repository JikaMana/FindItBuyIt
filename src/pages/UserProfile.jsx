import React, { useState, useEffect } from "react";
import {
  MapPin,
  Settings,
  Bell,
  History,
  TrashIcon,
  PlusIcon,
  Search,
  Pencil,
} from "lucide-react";
import LocationSearch from "../components/LocationSearch";
import { Link } from "react-router-dom";

export function UserProfile() {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState("");
  const [loc, setLoc] = useState(null);
  // Track whether we are editing an existing location
  const [editingLocation, setEditingLocation] = useState(null);
  const [savedLocations, setSavedLocations] = useState([
    {
      id: 1,
      addressTag: "Home",
      address: " Housing Estate, Oyigbo, Rivers state",
    },
    { id: 2, addressTag: "School", address: " Trans Amadi Industrial Layout" },
    { id: 3, addressTag: "Other", address: "Lagos Bus stop" },
  ]);
  // const handleAddLocation = () => {
  //   if (address === "" || loc === "") {
  //     alert("Empty field can't exist");
  //   } else {
  //     setSavedLocations([
  //       ...savedLocations,
  //       {
  //         addressTag: address,
  //         address: loc,
  //       },
  //     ]);
  //     setShowModal(false);
  //   }
  // };
  // useEffect(() => {
  //   setAddress("");
  //   setLoc("");
  // }, [showModal]);
  // useEffect(() => {}, [loc, savedLocations]);

  // const deleteLocation = (locationID) => {
  //   setSavedLocations(
  //     savedLocations.filter((locations) => locations.id !== locationID)
  //   );
  // };
  // const editLocation = (locationID) => {
  //   const itemToEdit = savedLocations[locationID];
  //   setShowModal(true);

  //   console.log(itemToEdit);
  // };
  const resetModal = () => {
    setAddress("");
    setLoc("");
    setEditingLocation(null);
  };

  // This function handles both adding and editing a location.
  const handleSaveLocation = () => {
    if (address.trim() === "" || loc.trim() === "") {
      alert("Empty field can't exist");
      return;
    }
    if (editingLocation) {
      setSavedLocations(
        savedLocations.map((location) =>
          location.id === editingLocation.id
            ? { ...location, addressTag: address, address: loc }
            : location
        )
      );
    } else {
      const newLocation = {
        id: savedLocations.length
          ? Math.max(...savedLocations.map((loc) => loc.id)) + 1
          : 1,
        addressTag: address,
        address: loc,
      };
      setSavedLocations([...savedLocations, newLocation]);
    }
    setShowModal(false);
    resetModal();
  };

  const deleteLocation = (locationID) => {
    setSavedLocations(
      savedLocations.filter((location) => location.id !== locationID)
    );
  };

  const editLocation = (locationID) => {
    const locationToEdit = savedLocations.find(
      (location) => location.id === locationID
    );
    if (locationToEdit) {
      setEditingLocation(locationToEdit);
      setAddress(locationToEdit.addressTag);
      setShowModal(true);
    }
  };

  // Reset modal when it closes
  useEffect(() => {
    if (!showModal) {
      resetModal();
    }
  }, [showModal]);

  const userDetails = [
    {
      acronym: "JM",
      name: "Jika Mana",
      email: "jikamana2000@gmail.com",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            {userDetails.map((user) => (
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">
                    {user.acronym}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            ))}
            <nav className="space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-md bg-gray-50">
                <MapPin className="w-5 h-5" />
                <span className="wh">Saved Locations</span>
              </button>
              <Link
                to="/recents"
                className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50"
              >
                <History className="w-5 h-5" />
                <span>Search History</span>
              </Link>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-50">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-8">
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Saved Locations
            </h2>
            <div className="space-y-4">
              {savedLocations.map((location, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {location.addressTag}
                    </h3>
                    <p className="text-sm text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-gray-600 hover:text-green-600"
                      onClick={() => editLocation(location.id)}
                    >
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-red-600"
                      onClick={() => deleteLocation(location.id)}
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              <button
                className="w-full mt-4 border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors"
                onClick={() => {
                  if (!editingLocation) {
                    if (savedLocations.length < 3) {
                      setShowModal(true);
                    } else {
                      alert("Maximum of 3 addresses");
                    }
                  }
                }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <PlusIcon className="w-5 h-5" />
                  <span>Add New Location</span>
                </div>
              </button>
            </div>
          </section>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">
              {editingLocation ? "Edit Location" : "Add New Location"}
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Address Tag"
              className="w-full p-2 border rounded mb-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <LocationSearch loc={setLoc} />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveLocation}
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
              >
                {editingLocation ? "Save Changes" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
