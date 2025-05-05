import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../ReduxFile/CartAction';


function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div> 
      <h2 className="text-xl font-semibold mb-2">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-2">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border p-2 rounded">
                <div>
                  {item.name} x {item.quantity}
                </div>
                <button
                  className="text-red-500"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: ${total}</p>
          <button
            className="mt-2 bg-red-500 text-white px-4 py-1 rounded"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
