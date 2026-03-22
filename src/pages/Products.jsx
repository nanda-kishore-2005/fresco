import ProductList from '../components/ProductList';

const Products = ({ addToCart }) => {
  return (
    <div className="animate-fade-in pb-16">
      {/* Pre-order Notice Banner */}
      {/* <div className="bg-accent text-primary py-2 px-4 text-center font-medium shadow-sm mb-6">
        <p>📦 Pre-orders accepted! Place your order today and we will deliver on your preferred date.</p>
      </div> */}

      <div className="bg-primary/5 py-10 mb-8 mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Fresh Produce</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our selection of locally-sourced, organic fruits and vegetables.
            Freshness guaranteed with every order.
          </p>
        </div>
      </div>

      <ProductList
        addToCart={addToCart}
        title=""
        subtitle=""
      />
    </div>
  );
};

export default Products;
