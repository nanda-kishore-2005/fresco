import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { Leaf, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

const Home = ({ addToCart }) => {
  return (
    <div className="animate-fade-in bg-white">
      <Hero />

      {/* Featured Products Segment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Fresh <span className="text-primary">Arrivals</span></h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Handpicked organic goodness just for you.</p>
          </div>
          
          <ProductList addToCart={addToCart} limit={3} />
          
          <div className="mt-16 text-center">
            <Link 
              to="/products"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-white bg-secondary hover:bg-orange-700 smooth-transition shadow-soft hover:shadow-glow transform hover:-translate-y-1"
            >
              View All Produce
              <ArrowRight className="ml-3" size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Short About Section */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16 tracking-tight">Why Choose <span className="text-primary">Fresco Organics?</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-soft hover:shadow-xl smooth-transition transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-green-50 p-6 rounded-full text-primary mb-6 shadow-inner">
                <Leaf size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">100% Natural</h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">Pure, organic produce grown locally without any harmful chemicals or pesticides.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-soft hover:shadow-xl smooth-transition transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-orange-50 p-6 rounded-full text-secondary mb-6 shadow-inner">
                <Truck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">Delivered directly from the farm to your doorstep in pristine condition.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-soft hover:shadow-xl smooth-transition transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-yellow-50 p-6 rounded-full text-accent mb-6 shadow-inner">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Quality Assured</h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">Every item is freshly handpicked to ensure only the absolute best reaches your family.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
