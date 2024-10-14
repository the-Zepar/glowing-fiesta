import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

import { MapPinIcon, StarIcon, CameraIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Destination() {
  const [destination, setDestination] = useState({
    name: "N/A",
    description: "N/A",
    region: "N/A",
    image: "N/A",
    attractions: ["N/A"],
    rating: 0,
  });
  const location = useLocation();
  useEffect(() => {
    if (location.state) setDestination(location.state);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center mb-4">
              <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
              <span className="font-bold mr-2">{destination.rating}</span>
              <MapPinIcon className="w-5 h-5 mr-1" />
              <span>{destination.region}</span>
            </div>
            a
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
              {destination.description}
            </p>
            <img
              src={destination.image}
              alt={destination.name}
              width={800}
              height={400}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CameraIcon className="w-5 h-5 mr-2" />
                  Popular Attractions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {destination.attractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Link to="offer">
              <Button size="lg">Plan Your Trip to {destination.name}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
