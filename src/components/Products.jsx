import { useState, useEffect } from 'react';

const Products = ({ cart, saveCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;
    
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    
    saveCart(updatedCart);
  };

  if (loading) return <div className="text-center py-8">Loading products...</div>;
  if (!products.length) return <div className="text-center py-8">No products found.</div>;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-prifeBlue mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium text-prifeBlue">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-prifeOrange text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;