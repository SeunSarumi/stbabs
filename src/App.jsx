import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Pricing from "./pages/Pricing";

export default function App() {
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/services" element={<Services />} />
  //     <Route path="/pricing" element={<Pricing />} />
  //   </Routes>
  // );

  return (
    <>
      <Home />
      <About />
      <Services />
      <Booking />
      <Pricing />
    </>
  );
}
