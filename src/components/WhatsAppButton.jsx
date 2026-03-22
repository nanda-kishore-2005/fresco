import { MessageCircle } from 'lucide-react';
import { whatsAppNumbers } from '../utils/whatsapp';

const WhatsAppButton = () => {
  // Use the primary number for the floating button
  const primaryNumber = whatsAppNumbers[0].replace(/\+/g, '').replace(/ /g, '');
  const link = `https://wa.me/${primaryNumber}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 smooth-transition z-50 flex items-center justify-center animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;
