import { whatsAppNumbers } from '../utils/whatsapp';
import { Heart, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-20 animate-fade-in">
      <div className="bg-primary text-white py-16 px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Fresco Organics</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Nature's Best Served Fresh.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                Our Story <Heart className="ml-3 text-secondary" />
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Fresco Organics started with a simple vision: to bridge the gap between local farms and your kitchen table. We believe that everyone deserves access to fresh, natural, and chemical-free produce.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By ordering through us, you're not just getting the tastiest sweet potatoes and bananas; you're supporting local agriculture and a healthier lifestyle. We carefully select every item to ensure it meets our high standards before it reaches your door.
              </p>
            </div>
            <div className="md:w-1/2 bg-yellow-50 rounded-xl p-8 border border-yellow-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                Delivery Areas <MapPin className="ml-2 text-primary" />
              </h3>
              <ul className="space-y-4 text-lg text-gray-800">
                <li className="flex items-center">
                  <span className="bg-white p-2 rounded-full shadow-sm mr-4 text-xl">📍</span>
                  <span className="font-medium">Mangalagiri</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white p-2 rounded-full shadow-sm mr-4 text-xl">📍</span>
                  <span className="font-medium">Vadeswaram</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white p-2 rounded-full shadow-sm mr-4 text-xl">🎓</span>
                  <span className="font-medium text-primary">KL University</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            Get in Touch <Phone className="ml-3 text-secondary" />
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a question about our products or your delivery? We're just a message away! 
            Reach out to us directly on WhatsApp for the fastest response.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {whatsAppNumbers.map((num, i) => (
              <a 
                key={i} 
                href={`https://wa.me/${num.replace(/\+/g, '').replace(/ /g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-xl shadow-md hover:bg-green-600 transform hover:-translate-y-1 smooth-transition"
              >
                Message {num}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
