import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ClockIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Contact Us
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We're here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Get in Touch
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Contact Information
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPinIcon className="w-5 h-5 mr-2" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Addis Ababa, Ethiopia</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PhoneIcon className="w-5 h-5 mr-2" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>+0 (000) 000-0000</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MailIcon className="w-5 h-5 mr-2" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>info@ethiovoyage.com</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ClockIcon className="w-5 h-5 mr-2" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Monday - Friday: 9am - 5pm
                      <br />
                      Saturday: 10am - 2pm
                      <br />
                      Sunday: Closed
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
