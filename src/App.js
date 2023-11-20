import React from 'react';

import LogIn from './Component/LogIn';
import PageNotFound from './Component/PageNotFound';
import ContactUs from './Component/ContactUs';
import Home from './Component/Home'
import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from './Component/Product'
import { Card } from 'react-bootstrap';

function App() {
  return (
    <Router>   
      
       <NavBar />
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