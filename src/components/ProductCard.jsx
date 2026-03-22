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
    navigate('/checkout', { 
      state: { 
        buyNowItem: { ...product, quantity } 
      } 
    });
  };

  return (
    <div className="group bg-white rounded-3xl shadow-soft hover:shadow-2xl smooth-transition overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-widest text-primary shadow-sm border border-white/50">
          FARM FRESH
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover relative z-10 transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Soft gradient overlay at bottom of image for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white z-20">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">{product.name}</h3>
          <div className="flex flex-col items-end">
             <span className="text-2xl font-black text-secondary">₹{product.price}</span>
             <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">per {product.unit}</span>
          </div>
        </div>
        
        <p className="text-gray-500 mb-8 flex-grow leading-relaxed font-medium">{product.description}</p>
        
        <div className="flex flex-col space-y-4 mt-auto">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between border-[1.5px] border-gray-200 rounded-2xl p-1.5 w-full bg-gray-50 shadow-inner">
            <button 
              onClick={decrease}
              className="p-3 text-gray-500 hover:text-primary hover:bg-white hover:shadow-sm rounded-xl smooth-transition focus:outline-none"
            >
              <Minus size={20} />
            </button>
            <span className="font-extrabold text-xl w-12 text-center text-gray-800">{quantity}</span>
            <button 
              onClick={increase}
              className="p-3 text-gray-500 hover:text-primary hover:bg-white hover:shadow-sm rounded-xl smooth-transition focus:outline-none"
            >
              <Plus size={20} />
            </button>
          </div>
          
          <div className="flex flex-col gap-3">
            <button
              onClick={handleAdd}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-sm uppercase tracking-wider flex items-center justify-center smooth-transition ${
                added 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-[#4F6F52] text-white hover:bg-primary shadow-soft hover:shadow-lg'
              }`}
            >
              {added ? (
                'Added to Cart!'
              ) : (
                <>
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </>
              )}
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full py-4 px-6 bg-accent text-white hover:bg-secondary rounded-2xl font-bold text-sm uppercase tracking-wider flex items-center justify-center shadow-soft hover:shadow-glow smooth-transition"
            >
              <Zap size={18} className="mr-2" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
