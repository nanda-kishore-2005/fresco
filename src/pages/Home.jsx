import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { Leaf, Truck, ShieldCheck } from 'lucide-react';

const Home = ({ addToCart }) => {
  return (
    <div className="animate-fade-in">
      {/* Pre-order Notice Banner */}
      {/* <div className="bg-accent text-primary py-2 px-4 text-center font-medium shadow-sm">
        <p>📦 Pre-orders accepted! Place your order today and we will deliver on your preferred date.</p>
      </div> */}

      <Hero />

      {/* <ProductList 
        addToCart={addToCart} 
        title="Featured Categories" 
        subtitle="Handpicked just for you"
      /> */}

      {/* Short About Section */}
      <section className="bg-gray-50 py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Fresco Organics?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md smooth-transition">
              <div className="bg-green-100 p-4 rounded-full text-primary mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Natural</h3>
              <p className="text-gray-600">Pure, organic produce grown without harmful chemicals or pesticides.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md smooth-transition">
              <div className="bg-orange-100 p-4 rounded-full text-secondary mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Directly from the farm to your doorstep in pristine condition.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md smooth-transition">
              <div className="bg-yellow-100 p-4 rounded-full text-yellow-600 mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Every item is handpicked to ensure only the best reaches your family.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
