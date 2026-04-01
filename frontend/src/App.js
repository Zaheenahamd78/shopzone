import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import OrderConfirmation from './pages/OrderConfirmation';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;