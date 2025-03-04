import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
