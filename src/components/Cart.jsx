import React from "react";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default function Cart() {
  const removeFromCart = (productId) => {
    cart = cart.filter((item) => item.id !== productId);
    saveCart();
  };

  const updateQuantity = (productId, newQuantity) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      if (newQuantity <= 0) {
        removeFromCart(productId);
      } else {
        item.quantity = newQuantity;
        saveCart();
      }
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-prifeBlue mb-8">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          Your cart is empty.
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
                <h3 className="text-lg font-medium text-prifeBlue">{item.name}</h3>
                <p className="mt-1 text-gray-600">${item.price.toFixed(2)} each</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{item.quantity}</span>
                  <button
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-8">
            <h2 className="text-2xl font-bold text-prifeBlue">Total: ${getTotal().toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}