import { useState } from "react";
import "./listTasks.css";
import Task from "../tasks/Task";
const ListTasks = ({ tasks, setTasks }) => {
  return (
    // <div className="card-group">
    <div className="tasks-parent" >
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
        ))}
    </div>
  );
};

export default ListTasks;
