import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/services"   element={<Services />} />
        <Route path="/projects"   element={<Projects />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/careers"    element={<Careers />} />
        {/* Legacy redirect */}
        <Route path="/CostApplication" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;