import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, MinusCircle, MapPin, Hotel, Plane } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { destinations as destinations0 } from "@/constants";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Travel() {
  const location = useLocation();

  const [hotel, setHotel] = useState("");
  const [destinations, setDestinations] = useState<string[]>([]);
  const [currentDestination, setCurrentDestination] = useState("");
  const [activities, setActivities] = useState<{ [key: string]: string[] }>({});
  const [currentActivity, setCurrentActivity] = useState("");
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null
  );
  useEffect(() => {
    setCurrentDestination(location.state);
  }, []);
  const addDestination = () => {
    const desss = {
      routes: [
        ["Addis Ababa", "Lalibela"],
        ["Lalibela", "Aksum"],
        ["Aksum", "Simien Mountains National Park"],
        ["Simien Mountains National Park", "Gondar"],
        ["Gondar", "Lake Tana and Blue Nile Falls"],
        ["Lake Tana and Blue Nile Falls", "Omo Valley"],
        ["Omo Valley", "Danakil Depression"],
        ["Danakil Depression", "Bale Mountains National Park"],
      ],
    };
    if (currentDestination && !destinations.includes(currentDestination)) {
      switch (currentDestination) {
        case "Lalibela":
          setDestinations([
            ...destinations,
            ...["Addis Ababa", "Wolega", "Lalibela"],
          ]);
          break;
        default:
          setDestinations([...destinations, currentDestination]);
          break;
      }
      setActivities({ ...activities, [currentDestination]: [] });
      setCurrentDestination("");
    }
  };

  const removeDestination = (dest: string) => {
    setDestinations(destinations.filter((d) => d !== dest));
    const newActivities = { ...activities };
    delete newActivities[dest];
    setActivities(newActivities);
    if (selectedDestination === dest) {
      setSelectedDestination(null);
    }
  };

  const addActivity = () => {
    if (selectedDestination && currentActivity) {
      setActivities({
        ...activities,
        [selectedDestination]: [
          ...(activities[selectedDestination] || []),
          currentActivity,
        ],
      });
      setCurrentActivity("");
    }
  };

  const removeActivity = (dest: string, activity: string) => {
    setActivities({
      ...activities,
      [dest]: activities[dest].filter((a) => a !== activity),
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Plan Your Journey</h1>

      <div className="sm:flex justify-between gap-2">
        <div className="sm:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="destination"
              className="block text-lg font-medium mb-2"
            >
              Add Destination:
            </label>
            <div className="flex items-center">
              <MapPin className="mr-2 text-gray-500" />
              {/* <input
                type="text"
                id="destination"
                value={currentDestination}
                onChange={(e) => setCurrentDestination(e.target.value)}
                className="flex-grow p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter a destination"
              /> */}

              <Select
                onValueChange={(e) => setCurrentDestination(e)}
                value={currentDestination}
              >
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Select Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="europe">Europe</SelectItem>
                  {destinations0.map((destination) => (
                    <SelectItem value={destination.name}>
                      {destination.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button
                onClick={addDestination}
                className="ml-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <PlusCircle size={24} />
              </button>
            </div>
          </div>
          <div className="mb-8">
            <label htmlFor="hotel" className="block text-lg font-medium mb-2">
              Starting Point (Hotel):
            </label>
            <div className="flex items-center">
              <Hotel className="mr-2 text-gray-500" />
              <input
                type="text"
                id="hotel"
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
                className="flex-grow p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter hotel name"
              />
            </div>
          </div>
          <div>
            <h2 className="block text-lg font-medium mb-2">Your Jounery</h2>
            <div className="space-y-4">
              <AnimatePresence>
                {hotel && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center bg-blue-100 p-4 rounded-lg"
                  >
                    <Hotel className="mr-4 text-blue-500" />
                    <span className="font-medium">{hotel}</span>
                  </motion.div>
                )}
                {destinations.map((dest) => (
                  <motion.div
                    key={dest}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="ml-8 relative"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300" />
                    <div className="flex items-center mb-2">
                      <div className="absolute left-0 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2" />
                      <button
                        onClick={() =>
                          setSelectedDestination(
                            selectedDestination === dest ? null : dest
                          )
                        }
                        className="ml-6 flex items-center bg-white p-2 rounded-lg shadow hover:bg-gray-50 transition-colors"
                      >
                        <MapPin className="mr-2 text-blue-500" />
                        <span className="font-medium">{dest}</span>
                      </button>
                      <button
                        onClick={() => removeDestination(dest)}
                        className="ml-2 text-red-500 p-1 rounded-full hover:bg-red-100 transition-colors"
                      >
                        <MinusCircle size={20} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {selectedDestination === dest && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-12 mt-2 space-y-2"
                        >
                          <div className="flex items-center">
                            <input
                              type="text"
                              value={currentActivity}
                              onChange={(e) =>
                                setCurrentActivity(e.target.value)
                              }
                              className="flex-grow p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                              placeholder="Add an activity"
                            />
                            <button
                              onClick={addActivity}
                              className="ml-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                            >
                              <PlusCircle size={20} />
                            </button>
                          </div>
                          {activities[dest]?.map((activity) => (
                            <motion.div
                              key={activity}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="flex items-center bg-gray-100 p-2 rounded-lg"
                            >
                              <span className="flex-grow">{activity}</span>
                              <button
                                onClick={() => removeActivity(dest, activity)}
                                className="text-red-500 p-1 rounded-full hover:bg-red-100 transition-colors"
                              >
                                <MinusCircle size={16} />
                              </button>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                {hotel && destinations.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="ml-8 relative flex items-center"
                  >
                    <div className="absolute left-0 top-0 bottom-1/2 w-0.5 bg-gray-300" />
                    <div className="absolute left-0 w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2" />
                    <div className="ml-6 flex items-center bg-green-100 p-2 rounded-lg">
                      <Plane className="mr-2 text-green-500" />
                      <span className="font-medium">Return & Depart</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2">
          {destinations0.map((destination) => {
            if (destinations.includes(destination.name)) {
              return (
                <Card className="overflow-hidden my-2" key={destination.name}>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{destination.name}</span>
                      <span className="flex items-center text-yellow-500">
                        <StarIcon className="w-5 h-5 mr-1" />
                        {destination.rating}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{destination.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
