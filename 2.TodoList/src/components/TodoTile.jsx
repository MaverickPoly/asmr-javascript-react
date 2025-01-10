const TodoTile = ({ todo, index, onComplete, handleDelete }) => {
  return (
    <div className="todo-tile">
      <button
        onClick={onComplete}
        className={`btn ${todo[1] ? "success" : "error"}`}
      >
        {todo[1] ? "❌" : "✅"}
      </button>
      <button className="btn del" onClick={handleDelete}>
        🗑️
      </button>
      <span className={`title ${todo[1] ? "success" : "error"}`}>
        {todo[0]}
      </span>
    </div>
  );
};

export default TodoTile;
