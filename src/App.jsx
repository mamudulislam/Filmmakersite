import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Footer from './Pages/Footer/Footer';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Servicespag/Services';
import Portfolio from './Pages/Ourportfolio/Portfolio';
import TVcommecial from './Pages/TVCommecial/TVcommecial';
import Pricing from './Pages/Pricing/Pricing';
import Error from './Pages/Error/Error';

const App = () => {
  return (
    <div className="bg-[#000]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Works" element={<Portfolio />} />
          <Route path="/tv-commercial" element={<TVcommecial />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
