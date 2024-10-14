import { useState } from "react";

import { MinusCircle, MapPin, Hotel } from "lucide-react";
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

export default function Travel() {
  return <Component />;
}

import { Button } from "@/components/ui/button";

import { PlusCircledIcon } from "@radix-ui/react-icons";

function Component() {
  const [nodes, setNodes] = useState([
    {
      id: 1,
      mainContent: "Aksum",
      subContent: "Sub Node 1",
      imageUrl: "",
      description: "",
    },
    {
      id: 1,
      mainContent: "Harar",
      subContent: "Sub Node 1",
      imageUrl: "",
      description: "",
    },
    {
      id: 1,
      mainContent: "Gondar",
      subContent: "Sub Node 1",
      imageUrl: "",
      description: "",
    },
  ]);

  const handleAddNode = () => {
    const newNode = {
      id: Date.now(),
      mainContent: `Aksum`,
      subContent: `Sub Node ${nodes.length + 1}`,
      imageUrl: "",
      description: "",
    };
    setNodes([...nodes, newNode]);
  };

  const handleRemoveNode = (id: number) => {
    setNodes(nodes.filter((node) => node.id !== id));
  };

  const handleNodeContentChange = (
    id: number,
    field: "mainContent" | "subContent" | "imageUrl" | "description",
    newContent: string
  ) => {
    setNodes(
      nodes.map((node) =>
        node.id === id ? { ...node, [field]: newContent } : node
      )
    );
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Plan your journey
      </h2>
      <div>
        {nodes.map((node, index) => (
          <div key={node.id} className="relative py-4">
            {index > 0 && (
              <div className="absolute z-[-100] -top-1/2 left-4 w-1 h-full bg-black rounded-full" />
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-white rounded-full mr-4 flex items-center justify-center text-primary font-bold text-xl border">
                  {index + 1}
                </div>
                <div className="ml-2 flex items-center bg-white p-2 rounded-lg shadow hover:bg-gray-50 transition-colors">
                  <MapPin className="mr-2 text-blue-500" />
                  <Select
                    onValueChange={(e) =>
                      handleNodeContentChange(node.id, "mainContent", e)
                    }
                    value={node.mainContent}
                  >
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Select Destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations0.map((destination) => (
                        <SelectItem value={destination.name}>
                          {destination.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleRemoveNode(node.id)}
                  className="ml-2 text-red-500 p-1 rounded-full hover:bg-red-100 transition-colors"
                >
                  <MinusCircle size={20} />
                </Button>
              </div>
              <div className="w-1/2 z-[-2] h-[2px] absolute top-1/2 left-1/4 -transform-y-1/2  bg-black"></div>
              <div className="mr-8">
                <div className="ml-2 flex items-center bg-white p-2 rounded-lg shadow hover:bg-gray-50 transition-colors">
                  <Hotel className="mr-2 text-gray-500" />
                  <Select
                    value={node.subContent}
                    onValueChange={(e) =>
                      handleNodeContentChange(node.id, "subContent", e)
                    }
                  >
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Select Destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations0.map((destination) => (
                        <SelectItem value={destination.name}>
                          {destination.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {node.mainContent ? (
                destinations0.map((destination) => {
                  if (node.mainContent == destination.name) {
                    return (
                      <Card
                        className="overflow-hidden my-2"
                        key={destination.name}
                      >
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
                          <CardDescription>
                            {destination.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    );
                  }
                })
              ) : (
                <Card className="overflow-hidden my-2">
                  <img
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>-------</span>
                      <span className="flex items-center text-yellow-500">
                        <StarIcon className="w-5 h-5 mr-1" />-
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>-----------</CardDescription>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ))}
      </div>
      <Button onClick={handleAddNode} className="mt-12 mx-auto flex">
        <PlusCircledIcon className="mr-2 h-5 w-5" /> Add Destination
      </Button>
    </div>
  );
}
