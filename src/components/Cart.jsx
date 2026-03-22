import { Plus, Minus, Trash2 } from 'lucide-react';

const Cart = ({ cart, updateQuantity, removeFromCart, cartTotal }) => {
  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100">
        <h3 className="text-xl font-medium text-gray-700 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Looks like you haven't added any fresh produce yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Order Summary</h2>
      
      <div className="space-y-6">
        {cart.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-50 pb-4">
            <div className="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">₹{item.price}/{item.unit}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between w-full sm:w-auto space-x-6">
              <div className="flex items-center border border-gray-200 rounded-lg p-1 bg-gray-50">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 text-gray-600 hover:text-primary rounded"
                >
                  <Minus size={16} />
                </button>
                <span className="font-medium w-8 text-center">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 text-gray-600 hover:text-primary rounded"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <div className="font-bold text-lg text-gray-900 w-20 text-right">
                ₹{item.price * item.quantity}
              </div>
              
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 smooth-transition"
                aria-label="Remove item"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 flex justify-between items-center text-xl">
        <span className="font-medium text-gray-700">Total:</span>
        <span className="font-bold text-2xl text-secondary">₹{cartTotal}</span>
      </div>
    </div>
  );
};

export default Cart;
