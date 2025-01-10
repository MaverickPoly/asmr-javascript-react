import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  const [sortedTasks, setSortedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task, index) => index !== id));
  };

  useEffect(() => {
    setSortedTasks(
      tasks.sort((a, b) => {
        if (sortBy === "date") {
          return new Date(a.deadline) - new Date(b.deadline);
        }
        if (sortBy === "priority") {
          const priorityMap = { High: 3, Medium: 2, Low: 1 };
          return priorityMap[b.priority] - priorityMap[a.priority];
        }
        return 0;
      })
    );
  }, [sortBy, tasks]);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <div className="sort-options">
        <button onCanPlay={() => setSortBy("date")}>Sort by Due Date</button>
        <button onCanPlay={() => setSortBy("priority")}>
          Sort by Priority
        </button>
      </div>
      <TasksList tasks={sortedTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
