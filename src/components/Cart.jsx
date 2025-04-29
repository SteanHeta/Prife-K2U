const Cart = ({ cart, saveCart }) => {
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    saveCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-prifeBlue mb-8">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-xl font-medium text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <button 
            onClick={() => renderPage('products')} 
            className="inline-block px-6 py-3 bg-prifeBlue text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {cart.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row border-b border-gray-200 py-4">
                <div className="flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                </div>
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
                  <button 
                    className="ml-4 text-red-500 hover:text-red-700" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Order Summary</h3>
              <span className="text-sm text-gray-500">{cart.length} item{cart.length !== 1 ? 's' : ''}</span>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3">
                <span className="text-gray-600">Total</span>
                <span className="text-lg font-bold text-prifeOrange">${(getTotal()).toFixed(2)}</span>
              </div>
            </div>
            <button 
              onClick={() => renderPage('checkout')}
              className="w-full bg-prifeGreen text-white py-3 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;