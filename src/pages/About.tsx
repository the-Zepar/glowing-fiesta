import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircleIcon,
  GlobeIcon,
  HeartIcon,
  ShieldIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              About Ethio voyage
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Inspiring adventures and creating unforgettable memories since
              2005.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Story
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ethio voyage was born out of a passion for exploration and a
                desire to make world travel accessible to everyone.
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mission is to inspire, guide, and support travelers in their
                journeys across the globe. We believe that travel has the power
                to broaden perspectives, foster understanding, and create
                lasting connections between people and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<GlobeIcon className="h-10 w-10" />}
              title="Sustainability"
              description="We're committed to promoting responsible and sustainable travel practices."
            />
            <ValueCard
              icon={<UsersIcon className="h-10 w-10" />}
              title="Inclusivity"
              description="We believe travel should be accessible to everyone, regardless of background or ability."
            />
            <ValueCard
              icon={<StarIcon className="h-10 w-10" />}
              title="Excellence"
              description="We strive for excellence in every aspect of our service to ensure the best travel experiences."
            />
            <ValueCard
              icon={<ShieldIcon className="h-10 w-10" />}
              title="Safety"
              description="The safety and well-being of our travelers is our top priority in all our operations."
            />
            <ValueCard
              icon={<HeartIcon className="h-10 w-10" />}
              title="Passion"
              description="Our team is driven by a genuine passion for travel and cultural exchange."
            />
            <ValueCard
              icon={<CheckCircleIcon className="h-10 w-10" />}
              title="Integrity"
              description="We operate with honesty and transparency in all our dealings with customers and partners."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <div className="p-2 bg-gray-100 rounded-full dark:bg-gray-800">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
