import React from 'react';
import ProductDisplay from '../components/ProductDisplay';

const Products = ({ products }) => {
  return (
    <div className="container text-center mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductDisplay
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
