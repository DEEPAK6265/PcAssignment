// TodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      dispatch(addNewTodo({ title, description }));
      setTitle("");
      setDescription("");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onFormSubmit(e);
    }
  };

  return (
    <form className="form">
      <input
        placeholder="Enter new todo..."
        className="input"
        onChange={handleTitleChange}
        onKeyDown={handleKeyDown}
        value={title}
      />
      <input
        placeholder="Enter Description..."
        className="input"
        onChange={handleDescriptionChange}
        onKeyDown={handleKeyDown}
        value={description}
      />
    </form>
  );
};

export default TodoForm;
