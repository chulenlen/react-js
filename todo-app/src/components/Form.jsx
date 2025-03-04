import { useState } from 'react';

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) return;

    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
