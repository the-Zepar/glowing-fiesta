import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { destinations } from "@/constants";
import { MapPinIcon, StarIcon } from "lucide-react";

import Fuse from "fuse.js";

interface Destinations {
  name: string;
  description: string;
  rating: number;
  image: string;
  region: string;
  attractions: string[];
}
const fuse = new Fuse(destinations, {
  keys: ["name", "description"],
  threshold: 0.3,
});

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Destinations[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const results = fuse.search(query);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults(destinations);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
            Explore Our Destinations
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input
              className="flex-1"
              placeholder="Search destinations"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="americas">Americas</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="oceania">Oceania</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((destination, i) => (
              <DestinationCard
                key={i}
                name={destination.name}
                image={destination.image}
                description={destination.description}
                rating={destination.rating}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Destinations</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function DestinationCard({
  name,
  image,
  description,
  rating,
}: {
  name: string;
  image: string;
  description: string;
  rating: number;
}) {
  return (
    <Card className="overflow-hidden">
      <img
        src={image}
        alt={name}
        width={400}
        height={200}
        className="object-cover w-full h-48"
      />
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          <span className="flex items-center text-yellow-500">
            <StarIcon className="w-5 h-5 mr-1" />
            {rating}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <MapPinIcon className="w-4 h-4 mr-2" />
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
}
