import React, { useReducer, useRef, useState, useEffect } from "react";

// Reducer function for the counter
const counterReducer = (state, action) => {
  switch (action.type) { 
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export default function HooksExample() {
  
  const [count, dispatch] = useReducer(counterReducer, 0);

  const inputRef = useRef(null);

  const [show, setShow] = useState(true);  

  useEffect(() => {
    console.log(`Counter updated: ${count}`);
  }, [count]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">React Hooks Example</h1>

      <div className="mb-4">
        <p className="text-xl">Counter: {count}</p>
        <button className="btn" onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button className="btn ml-2" onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button className="btn ml-2" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>

      <div className="mb-4">
        <input
          ref={inputRef}
          className="border p-2 rounded w-full"
          type="text"
          placeholder="Focus me!"
        />
        <button className="btn mt-2" onClick={focusInput}>
          Focus Input
        </button>
      </div>

      <div>
        <button className="btn mb-2" onClick={() => setShow(!show)}>
          Toggle Text
        </button>
        {show && <p className="text-green-600">Hello! I am toggled with useState.</p>}
      </div>
    </div>
  );
}
