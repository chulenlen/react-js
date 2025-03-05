import styles from './todoitem.module.css';

function TodoItem({ todo, todos, setTodos }) {
  function handleDelete(item) {
    console.log('Delete button');
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    // console.log('item text clicked', name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(todos);
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          style={todo.done ? { textDecoration: 'line-through' } : {}}
          onClick={() => handleClick(todo.name)}
        >
          {todo.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(todo)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}

export default TodoItem;
