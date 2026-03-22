import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-primary text-white overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28 lg:py-32 flex flex-col items-center text-center">
          <span className="text-accent font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
            100% Organic & Natural
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Nature's Best <br className="hidden md:block" />
            <span className="text-accent">Served Fresh</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl mb-10">
            Farm fresh produce delivered directly to your door in Mangalagiri, Vadeswaram, and KL University.
          </p>
          <Link
            to="/products"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-primary bg-accent hover:bg-yellow-400 smooth-transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Shop Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 smooth-transition" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
