import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Wireless Headphones', price: 2999, qty: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100' },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCartItems(cartItems.map(item => item.id === id ? { ...item, qty } : item));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">🛒 Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-xl mb-4">Your cart is empty!</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Shop Now
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-blue-600 font-bold">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(item.id, item.qty - 1)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">-</button>
                <span className="font-semibold">{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">+</button>
              </div>
              <p className="font-bold text-gray-800 w-24 text-right">₹{item.price * item.qty}</p>
              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 font-bold text-xl">✕</button>
            </div>
          ))}
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <div className="flex justify-between text-xl font-bold mb-4">
              <span>Total:</span>
              <span className="text-blue-600">₹{total}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;