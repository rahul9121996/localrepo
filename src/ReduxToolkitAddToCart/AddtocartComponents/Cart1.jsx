import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,decreaseQuantity,addToCart  } from '../features/cartSlice';


const Cart1 = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Cart</h2>
      <ul className="space-y-2">
        {cartItems.map(item => (
          <li key={item.id} className="p-2 border rounded flex justify-between items-center">
            <div>
              {item.name} - ${item.price} × {item.quantity}
            </div>
            <div className="space-x-2">
              <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 py-1 bg-yellow-400 rounded">-</button>
              <button onClick={() => dispatch(addToCart(item))} className="px-2 py-1 bg-green-500 rounded">+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="px-2 py-1 bg-red-500 rounded text-white">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart1;
