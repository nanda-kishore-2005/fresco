import { whatsAppNumbers } from '../utils/whatsapp';

const Footer = () => {
  const today = new Date();
  
  return (
    <footer className="bg-primary text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              Fresco <span className="text-accent">Organics</span>
            </h3>
            <p className="text-gray-200">Nature's Best Served Fresh.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Delivery Areas</h4>
            <ul className="space-y-2 text-gray-200">
              <li>📍 Mangalagiri</li>
              <li>📍 Vadeswaram</li>
              <li>🎓 KL University</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-2 text-gray-200">
              {whatsAppNumbers.map((number, idx) => (
                <li key={idx}>
                  <a 
                    href={`https://wa.me/${number.replace(/\+/g, '').replace(/ /g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent smooth-transition flex items-center gap-2"
                  >
                    💬 WhatsApp {number}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 outline-none pt-6 text-center text-sm text-gray-400">
          <p>&copy; {today.getFullYear()} Fresco Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
