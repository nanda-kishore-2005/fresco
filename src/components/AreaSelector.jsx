import { useState, useEffect } from 'react';
import { whatsAppNumbers } from '../utils/whatsapp';

const AreaSelector = ({ value, onChange, cabinValue, onCabinChange, setDisableForm }) => {
  const [selectedArea, setSelectedArea] = useState(value || '');

  const areas = [
    { id: 'mangalagiri', label: 'Mangalagiri', emoji: '📍' },
    { id: 'vadeswaram', label: 'Vadeswaram', emoji: '📍' },
    { id: 'kl-university', label: 'KL University', emoji: '🎓' },
    { id: 'other', label: 'Other', emoji: '📍' },
  ];

  useEffect(() => {
    if (selectedArea === 'Other') {
      setDisableForm(true);
    } else {
      setDisableForm(false);
    }
  }, [selectedArea, setDisableForm]);

  const handleSelect = (e) => {
    const val = e.target.value;
    setSelectedArea(val);
    onChange(val);
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
          Delivery Area <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="area"
            required
            value={selectedArea}
            onChange={handleSelect}
            className="block w-full rounded-lg border-gray-300 border px-4 py-3 bg-white text-gray-900 shadow-sm focus:border-primary focus:ring-primary focus:outline-none appearance-none"
          >
            <option value="" disabled>Select your area</option>
            {areas.map(area => (
              <option key={area.id} value={area.label}>
                {area.emoji} {area.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {selectedArea === 'KL University' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 animate-fade-in">
          <p className="text-sm text-yellow-800 mb-3 font-medium">
            Hi! Please enter your Cabin Number or Block details so we can reach you easily.
          </p>
          <div>
            <label htmlFor="cabin" className="block text-sm font-medium text-gray-700 mb-1">
              Cabin Number / Room / Block <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cabin"
              required
              value={cabinValue}
              onChange={(e) => onCabinChange(e.target.value)}
              placeholder="e.g. C-Block, Room 204"
              className="block w-full rounded-lg border-gray-300 border px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
            />
          </div>
          
          <div className="mt-4 pt-4 border-t border-yellow-200">
            <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Need help? Contact our university reps:</p>
            <div className="flex flex-wrap gap-2">
              {whatsAppNumbers.map((num, i) => (
                <a 
                  key={i} 
                  href={`https://wa.me/${num.replace(/\+/g, '').replace(/ /g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] text-white text-xs px-3 py-1.5 rounded-full font-medium hover:bg-green-600 smooth-transition"
                >
                  WhatsApp {num}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedArea === 'Other' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 animate-fade-in">
          <p className="text-red-800 mb-4 font-medium">
            Sorry, we currently deliver only to Mangalagiri, Vadeswaram and KL University. 
            Please contact us on WhatsApp to check if we can deliver to your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
             {whatsAppNumbers.map((num, i) => (
              <a 
                key={i} 
                href={`https://wa.me/${num.replace(/\+/g, '').replace(/ /g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 smooth-transition"
              >
                Contact via WhatsApp
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AreaSelector;
