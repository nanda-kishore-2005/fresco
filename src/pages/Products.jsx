import ProductList from '../components/ProductList';
import { Leaf } from 'lucide-react';

const Products = ({ addToCart }) => {
  return (
    <div className="bg-white min-h-screen pb-24 animate-fade-in pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center animate-slide-up bg-background rounded-3xl p-12 shadow-soft border border-gray-100 relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full filter blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-[80px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
           
           <div className="relative z-10 flex flex-col items-center">
             <div className="bg-white p-4 rounded-full shadow-md mb-6 inline-block">
               <Leaf size={32} className="text-primary" />
             </div>
             <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-6">Our <span className="text-primary">Produce</span></h1>
             <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
               Fresh from the farm to your table. Handpicked, locally-sourced, and grown with care and love.
             </p>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductList
          addToCart={addToCart}
          title=""
          subtitle=""
        />
      </div>
    </div>
  );
};

export default Products;
