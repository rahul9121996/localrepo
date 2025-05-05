import React from 'react';
import ProductCard from './ProductCard';


const dummyProducts = [
  { id: 1, name: 'Shoes', price: 50 },
  { id: 2, name: 'Shirt', price: 30 },
  { id: 3, name: 'Watch', price: 100 },
];

function ProductList() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Products</h2>
      <div className="space-y-4">
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
