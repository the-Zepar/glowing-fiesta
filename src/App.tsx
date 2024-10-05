import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Travel from "./pages/Travel";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Destinations from "./pages/Destinations";
import Offers from "./pages/Offers.tsx";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="travel" element={<Travel />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="offers" element={<Offers />} />
      </Route>
    </Routes>
  );
};

export default App;
