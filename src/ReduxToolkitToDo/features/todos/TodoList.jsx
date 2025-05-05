import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todosSlice';

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
        >
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-red-500">
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}
