import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Travel from "./pages/Travel";

import Layout from "./components/Layout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="travel" element={<Travel />} />
      </Route>
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  );
};

export default App;
