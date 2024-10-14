import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Travel from "./pages/Travel";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Destinations from "./pages/Destinations";
import Destination from "./pages/Destination.tsx";
import Offers from "./pages/Offers.tsx";
import Layout from "./components/Layout";
import Tunnel from "./pages/Tunnel.tsx";
import OfferSelectionPage from "./pages/OffersSelection.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="destinations" element={<Tunnel />}>
          <Route path="" element={<Destinations />} />
          <Route path="destination" element={<Tunnel />}>
            <Route path="" element={<Destination />} />
            <Route path="offer" element={<Tunnel />}>
              <Route path="" element={<OfferSelectionPage />} />
              <Route path="travel" element={<Travel />} />
            </Route>
          </Route>
        </Route>

        <Route path="offers" element={<Offers />} />
      </Route>
      <Route path="/*" element={<div>not Found</div>} />
    </Routes>
  );
};

export default App;
