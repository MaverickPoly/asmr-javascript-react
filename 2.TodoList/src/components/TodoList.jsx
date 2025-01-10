import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoTile from "./TodoTile";

const TodoList = () => {
  const [todos, setTodos] = useState([
    ["Workout", false],
    ["Study", true],
  ]);

  const toggleTodoComplete = (index) => {
    const new_todos = todos.map((todo, i) => {
      console.log(i, index);

      if (index === i) {
        todo[1] = !todo[1];
      }
      return todo;
    });
    setTodos(new_todos);
  };

  const handleDelete = (index) => {
    const new_todos = todos.filter((todo, i) => i !== index);
    setTodos(new_todos);
  };

  return (
    <div className="todo-list">
      <TodoForm setTodos={setTodos} todos={todos} />
      <div className="todos-container">
        {todos.map((todo, index) => (
          <TodoTile
            key={index}
            todo={todo}
            index={index}
            onComplete={() => toggleTodoComplete(index)}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
