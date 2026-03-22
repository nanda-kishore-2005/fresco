import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import { formatOrderMessage } from '../utils/whatsapp';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Checkout = ({ cart, cartTotal, clearCart }) => {
  const [checkoutStep, setCheckoutStep] = useState('form'); // 'form' | 'review' | 'confirmed'
  const [customerDetails, setCustomerDetails] = useState(null);
  const [orderId, setOrderId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle single item "Buy Now" flow isolated from main cart
  const buyNowItem = location.state?.buyNowItem;
  
  // Choose which items to process
  const checkoutItems = buyNowItem ? [buyNowItem] : cart;
  const checkoutTotal = buyNowItem ? (buyNowItem.price * buyNowItem.quantity) : cartTotal;

  useEffect(() => {
    // Redirect if they accessed /checkout manually and have absolutely no items
    if (checkoutItems.length === 0 && checkoutStep !== 'confirmed') {
      navigate('/cart');
    }
  }, [checkoutItems, navigate, checkoutStep]);

  const handleReviewOrder = (customerData) => {
    setCustomerDetails(customerData);
    setCheckoutStep('review');
  };

  const handleConfirmOrder = async () => {
    setIsSubmitting(true);
    const orderData = {
      customer: customerDetails,
      cart: checkoutItems, // Submits ONLY the buy now item, or the whole cart 
      total: checkoutTotal
    };

    const { message, orderId: generatedOrderId } = formatOrderMessage(orderData);
    
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: customerDetails.phone,
          message: message
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to place order');
      }

      // Set confirmation state
      setOrderId(generatedOrderId);
      setCheckoutStep('confirmed');
      
      // Clear global cart only if they were checking out the main cart
      if (!buyNowItem) {
        clearCart();
      }
    } catch (error) {
      console.error(error);
      alert('There was a problem confirming your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (checkoutItems.length === 0 && checkoutStep !== 'confirmed') return null;

  if (checkoutStep === 'confirmed') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center border top-4 border-green-100">
          <div className="flex justify-center mb-6">
            <CheckCircle2 size={80} className="text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
          
          <div className="bg-green-50 p-6 rounded-xl border border-green-200 inline-block mb-8">
            <p className="text-gray-800 font-medium mb-1">Your Order ID is:</p>
            <p className="text-3xl font-extrabold text-primary tracking-wider">{orderId}</p>
          </div>
          
          <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
            Please save this Order ID for your reference. We have opened WhatsApp with your order details. 
            If you have any questions, use this ID when contacting us.
          </p>
          
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-primary hover:bg-green-800 smooth-transition shadow-md transform hover:-translate-y-1"
          >
            Continue Shopping
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </div>
    );
  }

  if (checkoutStep === 'review') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 animate-fade-in">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Confirm Your Order</h1>
        
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Delivery Details</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700 mb-8 pt-2">
            <div className="col-span-2 sm:col-span-1">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Name</p>
              <p className="font-medium text-lg text-gray-900">{customerDetails.name}</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Phone</p>
              <p className="font-medium text-lg text-gray-900">{customerDetails.phone}</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Delivery Area</p>
              <p className="font-medium text-lg text-gray-900">{customerDetails.area}</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Delivery Date</p>
              <p className="font-medium text-lg text-gray-900">{customerDetails.deliveryDate}</p>
            </div>
            {customerDetails.cabin && (
              <div className="col-span-2">
                <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Cabin/Room/Block</p>
                <p className="font-medium text-lg text-gray-900">{customerDetails.cabin}</p>
              </div>
            )}
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Order Summary</h2>
          <div className="space-y-3 mb-6">
            {checkoutItems.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-medium text-gray-800">{item.quantity}x {item.name}</span>
                <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center text-xl font-bold text-gray-900 mb-8 bg-green-50 p-5 rounded-xl border border-green-200 shadow-inner">
            <span>Total amount to pay (COD)</span>
            <span className="text-secondary text-3xl">₹{checkoutTotal}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => setCheckoutStep('form')}
              className="flex-1 py-4 px-6 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 smooth-transition text-center"
            >
              Back to Edit
            </button>
            <button 
              onClick={handleConfirmOrder}
              disabled={isSubmitting}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-white smooth-transition shadow-md text-center ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 transform hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Confirm Order'}
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Clicking 'Confirm Order' will securely place your order and send a confirmation to you via WhatsApp.
          </p>
        </div>
      </div>
    );
  }

  // default 'form' view
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center md:text-left">Secure Checkout</h1>
        
        {/* Proper Amazon/Shopify two-column checkout layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Delivery Form */}
          <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
             <OrderForm 
                onSubmit={handleReviewOrder} 
                disabled={checkoutItems.length === 0} 
              />
          </div>
          
          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2 sticky top-24">
            <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {checkoutItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover border border-gray-100" />
                        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </div>
                    <span className="font-semibold text-gray-900">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-100 space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{checkoutTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200 flex justify-between items-center text-xl font-bold text-gray-900">
                <span>Total</span>
                <span className="text-secondary text-2xl">₹{checkoutTotal}</span>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
