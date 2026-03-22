import { Link, useNavigate } from 'react-router-dom';
import CartComponent from '../components/Cart';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const CartPage = ({ cart, updateQuantity, removeFromCart, cartTotal }) => {
  const navigate = useNavigate();
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="bg-white rounded-2xl shadow-sm p-12 border border-gray-100">
          <div className="flex justify-center mb-6 text-gray-300">
            <ShoppingBag size={80} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Fresco cart is empty</h2>
          <p className="text-lg text-gray-500 mb-8">
            Check out our fresh produce and add some items to your cart!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-primary hover:bg-green-800 smooth-transition shadow-md transform hover:-translate-y-1"
          >
            Start Shopping
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <CartComponent 
              cart={cart} 
              updateQuantity={updateQuantity} 
              removeFromCart={removeFromCart} 
              cartTotal={cartTotal} 
            />
          </div>
          
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Order Summary</h2>
              
              <div className="flex justify-between items-center mb-6 text-lg">
                <span className="text-gray-600">Subtotal ({cartItemCount} items):</span>
                <span className="font-bold text-gray-900">₹{cartTotal}</span>
              </div>
              
              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-4 px-6 rounded-xl font-bold text-lg text-primary bg-accent hover:bg-yellow-400 shadow-md transform hover:-translate-y-1 smooth-transition flex justify-center items-center"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
