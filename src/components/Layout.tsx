import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
export const metadata = {
  title: "Wanderlust Adventures",
  description: "Your gateway to unforgettable journeys",
};

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wanderlust Adventures</h3>
            <p>Your gateway to unforgettable journeys</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Travel", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="hover:text-yellow-300 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 Adventure Street</p>
            <p>Wanderlust City, WL 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@wanderlustadventures.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Wanderlust Adventures. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
