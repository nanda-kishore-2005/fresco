import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setQuantity(1); // Reset quantity selector
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    // Navigate straight to checkout bypassing cart, carrying only this single item
    // This perfectly mirrors Amazon's strict single-item Buy Now button
    navigate('/checkout', { 
      state: { 
        buyNowItem: { ...product, quantity } 
      } 
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl smooth-transition overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden bg-gray-50">
        {/* Placeholder if image is missing, though we'll assume it exists */}
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">
          <span className="text-sm">Image: {product.name}</span>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover relative z-10"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <span className="text-lg font-bold text-secondary">₹{product.price}<span className="text-sm text-gray-500 font-normal">/{product.unit}</span></span>
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
        
        <div className="flex flex-col space-y-4 mt-auto">
          <div className="flex items-center justify-between border border-gray-200 rounded-lg p-1 w-full bg-gray-50">
            <button 
              onClick={decrease}
              className="p-2 text-gray-600 hover:text-primary hover:bg-gray-200 rounded-md smooth-transition focus:outline-none"
              aria-label="Decrease quantity"
            >
              <Minus size={20} />
            </button>
            <span className="font-semibold text-lg w-10 text-center">{quantity}</span>
            <button 
              onClick={increase}
              className="p-2 text-gray-600 hover:text-primary hover:bg-gray-200 rounded-md smooth-transition focus:outline-none"
              aria-label="Increase quantity"
            >
              <Plus size={20} />
            </button>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={handleAdd}
              className={`flex-1 py-3 px-2 rounded-lg font-bold flex items-center justify-center smooth-transition ${
                added 
                  ? 'bg-green-500 text-white' 
                  : 'bg-primary text-white hover:bg-opacity-90 shadow-md hover:shadow-lg'
              }`}
            >
              {added ? (
                'Added!'
              ) : (
                <>
                  <ShoppingCart size={18} className="mr-1 lg:mr-2" />
                  Cart
                </>
              )}
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 py-3 px-2 bg-accent text-primary hover:bg-yellow-400 rounded-lg font-bold flex items-center justify-center shadow-md hover:shadow-lg smooth-transition"
            >
              <Zap size={18} className="mr-1 lg:mr-2" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
