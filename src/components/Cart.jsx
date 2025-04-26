const Cart = ({ cart, saveCart }) => {
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ).filter(item => item.quantity > 0);
    saveCart(updatedCart);
  };

  const getTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
            <div key={item.id} className="flex justify-between items-center mb-4 p-4 bg-white rounded-lg shadow">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-medium text-prifeBlue">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center">
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
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-prifeBlue text-right">
              Total: ${getTotal().toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;