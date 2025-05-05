import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';


const products = [
  { id: 1, name: 'Apple', price: 1 },
  { id: 2, name: 'Banana', price: 2 },
  { id: 3, name: 'Orange', price: 3 },
];

const ProductList1 = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Products</h2>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="p-2 border rounded flex justify-between items-center">
            <div>{product.name} - ${product.price}</div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList1;
