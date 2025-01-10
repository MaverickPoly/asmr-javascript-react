import React from "react";

const TasksList = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No Tasks created yet!</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-card">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>
                <strong>Deadline:</strong> {task.deadline}
              </p>
              <p>
                <strong>Priority:</strong> {task.priority}
              </p>
              <button className="btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TasksList;
