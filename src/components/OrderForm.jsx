import { useState } from 'react';
import AreaSelector from './AreaSelector';

const OrderForm = ({ onSubmit, disabled }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deliveryDate: '',
    area: '',
    cabin: ''
  });
  
  const [formDisabledByArea, setFormDisabledByArea] = useState(false);

  // Set minimum date to today for delivery date picker
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleAreaChange = (area) => {
    setFormData(prev => ({ ...prev, area }));
  };

  const handleCabinChange = (cabin) => {
    setFormData(prev => ({ ...prev, cabin }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formDisabledByArea && !disabled) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Customer Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-lg border-gray-300 border px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-lg border-gray-300 border px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
              placeholder="10-digit mobile number"
            />
          </div>
        </div>

        <div>
           <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Delivery Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="deliveryDate"
            required
            min={today}
            value={formData.deliveryDate}
            onChange={handleChange}
            className="block w-full rounded-lg border-gray-300 border px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
          />
        </div>

        <AreaSelector 
          value={formData.area} 
          onChange={handleAreaChange}
          cabinValue={formData.cabin}
          onCabinChange={handleCabinChange}
          setDisableForm={setFormDisabledByArea}
        />

        <div className="pt-6">
          <button
            type="submit"
            disabled={disabled || formDisabledByArea}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white flex justify-center items-center shadow-md smooth-transition
              ${disabled || formDisabledByArea 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1'
              }`}
          >
            {disabled ? 'Cart is Empty' : 'Place Order'}
          </button>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Payment Method: <span className="font-semibold text-gray-700">Cash on Delivery</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
