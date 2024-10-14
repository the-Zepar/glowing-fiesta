"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PlaneIcon, CoffeeIcon, WifiIcon, UtensilsIcon } from "lucide-react";
import { Link } from "react-router-dom";

const travelClasses = [
  {
    id: "economy",
    name: "Economy Class",
    description: "Affordable travel with essential amenities",
    icon: <PlaneIcon className="w-6 h-6" />,
    price: "€500",
    features: ["Standard Seat", "Carry-on Bag"],
  },
  {
    id: "premium-economy",
    name: "Premium Economy",
    description: "Extra comfort and perks at a reasonable price",
    icon: <CoffeeIcon className="w-6 h-6" />,
    price: "€800",
    features: ["Wider Seat", "Extra Legroom", "In-flight Meal"],
  },
  {
    id: "business",
    name: "Business Class",
    description: "Premium travel experience with luxury and convenience",
    icon: <WifiIcon className="w-6 h-6" />,
    price: "€1500",
    features: [
      "Lie-flat Seat",
      "Lounge Access",
      "Priority Check-in",
      "Gourmet Meals",
    ],
  },
  {
    id: "first",
    name: "First Class",
    description: "Ultimate luxury and personalized service",
    icon: <UtensilsIcon className="w-6 h-6" />,
    price: "€3000",
    features: [
      "Private Suite",
      "Chauffeur Service",
      "Spa Treatment",
      "Personalized Service",
    ],
  },
];

interface SelectedClass {
  id: string;
  name: string;
  description: string;
  icon: any;
  price: string;
  features: string[];
}

export default function OfferSelectionPage() {
  const [selectedClass, setSelectedClass] = useState<SelectedClass>({
    id: "",
    name: "",
    description: "",
    icon: "",
    price: "",
    features: [""],
  });

  const handleSelectClass = (travelClass: SelectedClass) => {
    setSelectedClass(travelClass);
  };

  const handleProceed = () => {
    console.log(
      "Proceeding with class:",
      selectedClass.name,
      "to destination:"
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
            Design Your Perfect Journey
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Select Your Travel Class
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {travelClasses.map((travelClass) => (
                  <Card
                    key={travelClass.id}
                    className={`cursor-pointer transition-all ${
                      selectedClass?.id === travelClass.id
                        ? "ring-2 ring-primary"
                        : ""
                    }`}
                    onClick={() => handleSelectClass(travelClass)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {travelClass.name}
                        {travelClass.icon}
                      </CardTitle>
                      <CardDescription>{travelClass.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside">
                        {travelClass.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
                <h3 className="text-xl font-bold mb-2">Your Selection</h3>
                <p>
                  {selectedClass ? selectedClass.name : "Select a travel class"}{" "}
                  to{" "}
                </p>
                {selectedClass && (
                  <p className="mt-2 text-2xl font-bold">
                    {selectedClass.price}
                  </p>
                )}
              </div>
              <Link to="travel">
                <Button
                  size="lg"
                  onClick={handleProceed}
                  disabled={!selectedClass}
                >
                  Proceed with Selection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
