import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductList = ({ addToCart, title = "Our Fresh Produce", subtitle = "Sourced directly from farms" }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
