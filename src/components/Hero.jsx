import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary to-[#0A2612] text-white overflow-hidden w-full pt-20 pb-32 md:pt-24 md:pb-40">
      {/* Safe Background Blobs for Mobile compatibility */}
      <div className="hidden md:block absolute top-0 -left-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 animate-blob"></div>
      <div className="hidden md:block absolute top-0 -right-10 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="hidden md:block absolute -bottom-20 left-40 w-96 h-96 bg-primary-light rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col items-center text-center animate-slide-up">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/20 border border-white/20 mb-8 text-yellow-300 font-bold tracking-wide text-sm shadow-xl">
            <Leaf size={16} className="mr-2" />
            100% Organic & Locally Sourced
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
            Nature's Best, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-secondary drop-shadow-sm">
              Served Fresh.
            </span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl mb-12 font-medium leading-relaxed">
            Experience the purest flavors of nature. Premium farm-fresh produce delivered directly to your door in Mangalagiri & KL University.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full text-primary bg-white hover:bg-background smooth-transition shadow-soft hover:shadow-glow transform hover:-translate-y-1"
            >
              Shop Collection
              <ArrowRight className="ml-3 group-hover:translate-x-2 smooth-transition text-secondary" size={24} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full text-white border-2 border-white/30 hover:bg-white/10 smooth-transition backdrop-blur-sm"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave Divider at Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none transform translate-y-1">
        <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.9,122.25,187.4,106.91C238.13,93.18,280.9,78.23,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
