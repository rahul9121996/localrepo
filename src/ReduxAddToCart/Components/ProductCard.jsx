import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../ReduxFile/CartAction';


function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-bold">{product.name}</h3>
        <p>${product.price}</p>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded"
        onClick={() => dispatch(addToCart(product))}
       >
        Add
      </button>
    </div>
  );
}

export default ProductCard;
