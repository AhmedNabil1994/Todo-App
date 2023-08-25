import Task from "../tasks/Task";
import { v4 as uuidV4 } from "uuid";
import "./addTask.css";
import { useState } from "react";
const AddTask = ({ name, setName, desc, setDesc, tasks, setTasks }) => {
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit({name,desc})
    setTasks([...tasks, { id: uuidV4(), title1: name, title2: desc }]);
    setName("");
    setDesc("");
  };
  return (
    <div>
      <form className=" mt-4 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3 form-floating ">
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleName}
            value={name}
            name="taskName"
            placeholder="Enter task name"
          />
          <label htmlFor="taskName" className="form-label">
            Task Name
          </label>
          {/* <h2>{name}</h2> */}
        </div>
        <div className="mb-3 form-floating ">
          <textarea
            rows="3"
            className="form-control"
            id="desc"
            onChange={handleDesc}
            value={desc}
            name="description"
            placeholder="Enter description "
          ></textarea>
          <label htmlFor="description" className="form-label">
            Description
          </label>
          {/* <h2>{desc}</h2> */}
        </div>
        <button type="submit" className="btn btn-primary btn-style">
          Add
        </button>
      </form>
      {/* <Task name={name} description ={desc}/> */}
    </div>
  );
};

export default AddTask;
