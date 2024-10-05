import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarIcon,
  MapPinIcon,
  PlaneIcon,
  StarIcon,
  SunIcon,
  UtensilsIcon,
} from "lucide-react";

export default function OffersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
            Special Offers
          </h1>
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="flights">Flights</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
            </TabsList>
            <TabsContent value="flights">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <OfferCard
                  title="Summer Flight Sale"
                  description="Up to 30% off on international flights. Book by July 31st for travel until December 15th."
                  icon={<PlaneIcon className="h-6 w-6" />}
                  price="From $299"
                />
                <OfferCard
                  title="Weekend Getaways"
                  description="Fly to nearby cities starting at $99. Perfect for quick escapes and short breaks."
                  icon={<SunIcon className="h-6 w-6" />}
                  price="From $99"
                />
                <OfferCard
                  title="Business Class Upgrade"
                  description="Upgrade to business class for just $199 on select long-haul flights. Limited time offer."
                  icon={<StarIcon className="h-6 w-6" />}
                  price="From $199"
                />
              </div>
            </TabsContent>
            <TabsContent value="hotels">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <OfferCard
                  title="Luxury for Less"
                  description="5-star hotels at 3-star prices. Enjoy luxury accommodations without breaking the bank."
                  icon={<StarIcon className="h-6 w-6" />}
                  price="From $150/night"
                />
                <OfferCard
                  title="Extended Stays"
                  description="Stay 7 nights, pay for 5. Perfect for remote workers and long vacations."
                  icon={<CalendarIcon className="h-6 w-6" />}
                  price="Save up to 30%"
                />
                <OfferCard
                  title="Breakfast Included"
                  description="Free breakfast with every booking. Start your day right with a complimentary meal."
                  icon={<UtensilsIcon className="h-6 w-6" />}
                  price="Added Value"
                />
              </div>
            </TabsContent>
            <TabsContent value="packages">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <OfferCard
                  title="All-Inclusive Resort"
                  description="7 nights with flights from $899. Includes meals, drinks, and activities."
                  icon={<SunIcon className="h-6 w-6" />}
                  price="From $899"
                />
                <OfferCard
                  title="City Explorer"
                  description="3 cities in 10 days, flights included. Perfect for culture enthusiasts and urban adventurers."
                  icon={<MapPinIcon className="h-6 w-6" />}
                  price="From $1299"
                />
                <OfferCard
                  title="Cruise & Stay"
                  description="3-night cruise + 4 nights hotel from $1299. The best of both worlds - sea and land."
                  icon={<PlaneIcon className="h-6 w-6" />}
                  price="From $1299"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

function OfferCard({
  title,
  description,
  icon,
  price,
}: {
  title: string;
  description: string;
  icon: any;
  price: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-bold">{price}</span>
        <Button>Book Now</Button>
      </CardFooter>
    </Card>
  );
}
