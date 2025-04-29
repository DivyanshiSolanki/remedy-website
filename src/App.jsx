import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hom from "./components/Hom";
import About from "./components/about";  // Un-comment this
import Services1 from "./components/s";
import Yt from './components/youtube'
import T from './components/tracker'
import Doctors from "./components/Doctors";  // Un-comment this
import Contact1 from "./components/Contact/Contact";
import B from './components/Bmi'
import Footer from "./components/Footer";
import ServiceCard from "./components/youtube"; // Ensure ServiceCard component exists

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hom />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/yt" element={<Yt />} />
          <Route path="/t" element={<T />} />
          <Route path="/b" element={<B />} />

          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services1 />} />

          <Route path="/contact1" element={<Contact1 />} />

          <Route path="/servicesCard" element={<ServiceCard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
