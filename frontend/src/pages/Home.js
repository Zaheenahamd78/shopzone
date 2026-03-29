import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 2999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300' },
  { id: 2, name: 'Smart Watch', price: 4999, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300' },
  { id: 3, name: 'Running Shoes', price: 1999, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300' },
  { id: 4, name: 'Backpack', price: 1499, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300' },
  { id: 5, name: 'Sunglasses', price: 999, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300' },
  { id: 6, name: 'Laptop Stand', price: 799, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300' },
];

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-blue-600 font-bold text-xl mt-1">₹{product.price}</p>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;