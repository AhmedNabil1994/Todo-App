import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AddTask from "./components/add-task-form/AddTask";
import Task from "./components/tasks/Task";
import { useState } from "react";
import ListTasks from "./components/list-tasks/ListTasks";
import Header from "./components/header/Header";
function App() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);
  // console.log(tasks)
  const handleSubmit = (data) => {
    // setTasks(...tasks, data);
    // console.log("submittedData", tasks);
  };
  return (
    <div className="App">
      <Header />
      <AddTask
        name={name}
        setName={setName}
        desc={desc}
        setDesc={setDesc}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ListTasks tasks={tasks} setTasks={setTasks} />  
    </div>
  );
}

export default App;
