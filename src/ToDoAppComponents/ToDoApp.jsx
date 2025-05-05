import React, { useEffect, useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null); 

  const url = "http://localhost:3000/todos";

  // Fetch todos
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // Add or Update todo
  const handleAddOrUpdate = () => {
    if (editingId) {
      const updatedTodo = { title, completed: false }; 
      fetch(`${url}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body:  JSON.stringify(updatedTodo),
      })
        .then(res => res.json())
        .then(data => {
          setTodos(todos.map(t => (t.id === editingId ? data : t)));
          setTitle("");
          setEditingId(null);
        });
    } else {
      // Add new todo (POST)
      const newTodo = { title, completed: false};
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      })
        .then(res => res.json())
        .then(data => {
          setTodos([...todos, data]);
          setTitle("");
        });
    }
  };

 
    
  // Delete todo
  const handleDelete = (id) => {
    fetch(`${url}/${id}`, { method: "DELETE" })
      .then(() => setTodos(todos.filter(todo => todo.id !== id)));
  };

  // Toggle complete
  const handleToggle = (id) => {
    const todo = todos.find(t => t.id === id);
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then(res => res.json())
      .then(updated => {
        setTodos(todos.map(t => (t.id === id ? updated : t)));
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">📝 To-Do Manager</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="flex-1 border px-3 py-2 rounded"
          placeholder="New Task"
        />
        <button
          onClick={handleAddOrUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingId ? "Update" : "Add"} {/* Dynamic button text */}
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span className="flex-1">{todo.title}</span>

            <div className="flex gap-2">
              <button
                onClick={() => handleToggle(todo.id)}
                className="text-green-500 hover:text-green-700"
              >
                ✅
              </button>

              <button
                onClick={() => {
                  setTitle(todo.title);
                  setEditingId(todo.id); 
                }}
                className="text-blue-500 hover:text-blue-700"
              >
                ✏️
              </button>

              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
