import React from 'react';
import LogIn from './Component/LogIn';
import PageNotFound from './Component/PageNotFound';
import ContactUs from './Component/ContactUs';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './Component/Product';
import { Card } from 'react-bootstrap';

function App() {

  const cardStyle = {
    padding: '5px',
    margin: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    // background: 'linear-gradient(135deg, #ff6b6b, #ffe66d)', // Aesthetic gradient colors
    background: 'linear-gradient(to bottom, #dbe6f6, #c9d6ff)', // Sober linear gradient
  };

  return (
    <Router>
      <Card style={cardStyle}>
        <NavBar />
      </Card>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
