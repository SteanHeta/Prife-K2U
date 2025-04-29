import React, { useState, useEffect } from 'react';
const Checkout = ({ cart, saveCart }) => {
    const [shippingInfo, setShippingInfo] = React.useState({
      name: '',
      address: '',
      city: '',
      state: '',
      country: '',
      phone: ''
    });
  
    const [paymentMethod, setPaymentMethod] = React.useState('credit');
    const [orderSuccess, setOrderSuccess] = React.useState(false);
  
    const handleShippingChange = (e) => {
      const { name, value } = e.target;
      setShippingInfo(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setOrderSuccess(true);
      saveCart([]); // Clear the cart
    };
  
    const getTotal = () => {
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
  
    if (orderSuccess) {
      return (
        <div className="max-w-2xl mx-auto my-8 bg-white p-8 rounded-lg shadow-md text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-prifeGreen mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-2xl font-bold text-prifeBlue mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
          <button 
            onClick={() => window.location.href = '/'} 
            className="px-6 py-2 bg-prifeBlue text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      );
    }
  
    return (
      <div className="max-w-4xl mx-auto my-8">
        <h1 className="text-3xl font-bold text-prifeBlue mb-8">Checkout</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-prifeBlue mb-4">Shipping Information</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={shippingInfo.name}
                      onChange={handleShippingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent" 
                      required 
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input 
                    type="text" 
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input 
                      type="text" 
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                    <input 
                      type="text" 
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                    <input 
                      type="text" 
                      name="zip"
                      value={shippingInfo.zip}
                      onChange={handleShippingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent" 
                      required 
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select 
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleShippingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent" 
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="MLY">Malaysia</option>
                    <option value="IND">Indonesia</option>
                    <option value="KNY">Kenya</option>
                    <option value="CHN">China</option>
                    <option value="PHL">Philippines</option>
                  </select>
                </div>
              </form>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-prifeBlue mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="credit" 
                    name="payment" 
                    value="credit" 
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                    className="h-4 w-4 text-prifeBlue focus:ring-prifeBlue border-gray-300"
                  />
                  <label htmlFor="credit" className="ml-2 block text-sm font-medium text-gray-700">Credit/Debit Card</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="paypal" 
                    name="payment" 
                    value="paypal" 
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    className="h-4 w-4 text-prifeBlue focus:ring-prifeBlue border-gray-300"
                  />
                  <label htmlFor="paypal" className="ml-2 block text-sm font-medium text-gray-700">PayPal</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="bank" 
                    name="payment" 
                    value="bank" 
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                    className="h-4 w-4 text-prifeBlue focus:ring-prifeBlue border-gray-300"
                  />
                  <label htmlFor="bank" className="ml-2 block text-sm font-medium text-gray-700">Bank Transfer</label>
                </div>
              </div>
            </div>
          </div>
  
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h2 className="text-xl font-semibold text-prifeBlue mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-gray-600">{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-prifeOrange">${getTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full bg-prifeGreen text-white py-3 px-4 rounded-md hover:bg-green-600 transition duration-300"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Checkout;