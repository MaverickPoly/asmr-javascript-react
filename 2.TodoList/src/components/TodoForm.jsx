import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    if (title !== "") {
      setTodos([...todos, [title, false]]);
      setTitle("");
    } else {
      alert("Please enter a todo title...!");
    }
  }

  return (
    <form onSubmit={formSubmit} className="add-todo">
      <input
        type="text"
        placeholder="Todo title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
