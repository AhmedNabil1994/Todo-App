import "./task.css";
const Task = ({ tasks, task, setTasks }) => {

  const handleDelete = ({ id }) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete clicked");
  };
  const handleEdit = ({ id }) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete clicked");
  };
  return (
    <div className="card tasks-child" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Task Name</h5>
        <h6 className="card-subtitle mb-2 text-muted">{task.title1}</h6>
        <p className="card-text">{task.title2}</p>
        <a
          href="#"
          className="btn btn-primary btns-style"
          onClick={() => handleEdit(task)}
        >
          Edit
        </a>
        <a
          href="#"
          className="btn btn-primary btns-style"
          onClick={() => handleDelete(task)}
        >
          Delete
        </a>
      </div>
    </div>
  );
};

export default Task;

// <div className="card-group">
//   <div className="task-card">
//     <div className="card" style={{ width: "18rem" }}>
//       <div className="card-body">
//         <h5 className="card-title">Task Name</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
//         <p className="card-text">{desc}</p>
//         <a href="#" className="btn btn-primary btns-style">
//           Edit
//         </a>
//         <a href="#" className="btn btn-primary btns-style">
//           Delete
//         </a>
//       </div>
//     </div>
//   </div>
//   <div className="task-card">
//     <div className="card" style={{ width: "18rem" }}>
//       <div className="card-body">
//         <h5 className="card-title">Task Name</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
//         <p className="card-text">{desc}</p>
//       </div>
//     </div>
//   </div>
//   <div className="task-card">
//     <div className="card" style={{ width: "18rem" }}>
//       <div className="card-body">
//         <h5 className="card-title">Task Name</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
//         <p className="card-text">{desc}</p>
//       </div>
//     </div>
//   </div>
// </div>
