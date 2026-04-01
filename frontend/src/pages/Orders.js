import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const orders = [
    {
      id: 'ORD-1001',
      date: '29-03-2026',
      items: [{ name: 'Wireless Headphones', qty: 1, price: 2999 }],
      total: 2999,
      status: 'Delivered'
    },
    {
      id: 'ORD-1002',
      date: '28-03-2026',
      items: [{ name: 'Smart Watch', qty: 1, price: 4999 }],
      total: 4999,
      status: 'Shipped'
    },
    {
      id: 'ORD-1003',
      date: '27-03-2026',
      items: [{ name: 'Running Shoes', qty: 1, price: 1999 }],
      total: 1999,
      status: 'Processing'
    },
  ];

  const statusColor = (status) => {
    if (status === 'Delivered') return 'bg-green-100 text-green-800';
    if (status === 'Shipped') return 'bg-blue-100 text-blue-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">My Orders</h1>

      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-800">{order.id}</h2>
              <p className="text-gray-500 text-sm">Placed on {order.date}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor(order.status)}`}>
              {order.status}
            </span>
          </div>

          <div className="border-t pt-4 flex justify-between items-start">
            <div className="flex-1">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between mb-2">
                  <span className="text-gray-600">{item.name} x{item.qty}</span>
                  <span className="font-semibold">Rs.{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between mt-3 text-lg font-bold border-t pt-2">
                <span>Total</span>
                <span className="text-blue-600">Rs.{order.total}</span>
              </div>
            </div>

            <div className="ml-6 text-center">
              <p className="text-xs text-gray-500 mb-2">Order QR</p>
              <QRCodeSVG
                value={`ShopZone | ${order.id} | Rs.${order.total} | ${order.status}`}
                size={90}
                bgColor="#ffffff"
                fgColor="#1a1a2e"
                level="H"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Orders;