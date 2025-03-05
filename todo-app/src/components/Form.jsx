import { useState } from 'react';
import styles from './form.module.css';

function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState('');
  const [todo, setTodo] = useState({ name: '', done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.name.trim()) return;

    setTodos([...todos, todo]);
    setTodo({ name: '', done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Add todo..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
