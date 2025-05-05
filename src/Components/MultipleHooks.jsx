import React, { useState, useReducer, useRef, useEffect } from 'react';

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.payload, id: Date.now() }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export default function HookExamplePage() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('Component mounted or updated');
    inputRef.current.focus(); // focus on input when page loads or updates
  }, [todos]); 

  const addTodo = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10 rounded shadow-lg border border-gray-200">
      <h1 className="text-xl font-bold mb-4">React Hooks Example</h1>

      
      <div className="mb-4">
        <p className="mb-2">Counter: {count}</p>
        <button className=" px-4 py-1 mr-2 rounded" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className=" px-4 py-1 rounded" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>

   
      <div className="mb-4"> 
        
        <input
          ref={inputRef}
          className="border px-2 py-1 mr-2 rounded w-full"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add todo..."
        />
        <button className="bg-green-600 text-white px-4 py-1 mt-2 rounded w-full" onClick={addTodo}>
          Add Todo
        </button>
      </div>

      <ul className="list-disc pl-5">
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span>{todo.text}</span>
            <button
              className="bg-red-400 text-white px-2 py-1 text-sm rounded"
              onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

