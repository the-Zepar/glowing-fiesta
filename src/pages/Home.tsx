import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
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
import { destinations } from "@/constants";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('./assets/Lalibela.jpg')] bg-cover bg-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Discover Your Next Adventure
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-400">
                Explore breathtaking destinations, create unforgettable
                memories, and experience the world like never before.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex-1"
                  placeholder="Where do you want to go?"
                />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, i) => (
              <DestinationCard
                key={i}
                name={destination.name}
                image={destination.image}
                description={destination.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Special Offers
          </h2>
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="flights">Flights</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
            </TabsList>
            <TabsContent value="flights">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <OfferCard
                  title="Summer Flight Sale"
                  description="Up to 30% off on international flights"
                  icon={<PlaneIcon className="h-6 w-6" />}
                />
                <OfferCard
                  title="Weekend Getaways"
                  description="Fly to nearby cities starting at $99"
                  icon={<SunIcon className="h-6 w-6" />}
                />
                <OfferCard
                  title="Business Class Upgrade"
                  description="Upgrade to business class for just $199"
                  icon={<StarIcon className="h-6 w-6" />}
                />
              </div>
            </TabsContent>
            <TabsContent value="hotels">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <OfferCard
                  title="Luxury for Less"
                  description="5-star hotels at 3-star prices"
                  icon={<StarIcon className="h-6 w-6" />}
                />
                <OfferCard
                  title="Extended Stays"
                  description="Stay 7 nights, pay for 5"
                  icon={<CalendarIcon className="h-6 w-6" />}
                />
                <OfferCard
                  title="Breakfast Included"
                  description="Free breakfast with every booking"
                  icon={<UtensilsIcon className="h-6 w-6" />}
                />
              </div>
            </TabsContent>
            <TabsContent value="packages">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <OfferCard
                  title="All-Inclusive Resort"
                  description="7 nights with flights from $899"
                  icon={<SunIcon className="h-6 w-6" />}
                />
                <OfferCard
                  title="City Explorer"
                  description="3 cities in 10 days, flights included"
                  icon={<MapPinIcon className="h-6 w-6" />}
                />
                <OfferCard
                  title="Cruise & Stay"
                  description="3-night cruise + 4 nights hotel from $1299"
                  icon={<PlaneIcon className="h-6 w-6" />}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Best Price Guarantee"
              description="We promise the best rates and will match any lower price you find."
              icon={<StarIcon className="h-10 w-10" />}
            />
            <FeatureCard
              title="Flexible Bookings"
              description="Plans change. That's why we offer free cancellation on most bookings."
              icon={<CalendarIcon className="h-10 w-10" />}
            />
            <FeatureCard
              title="24/7 Support"
              description="Our travel experts are here to help you anytime, anywhere."
              icon={<PlaneIcon className="h-10 w-10" />}
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready for Your Next Adventure?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Sign up for our newsletter and be the first to know about
                exclusive deals and new destinations.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By subscribing, you agree to our terms and privacy policy.
              </p>
            </div>
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
}: {
  name: string;
  image: string;
  description: string;
}) {
  const navigate = useNavigate();
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
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => navigate("/travel", { state: name })}
        >
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
}

function OfferCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: any;
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
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book Now</Button>
      </CardFooter>
    </Card>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="flex justify-center">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
