import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo?.title);
  console.log('todo?.title', todo?.title)

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing(false); // Turn off editing mode after form submission
    dispatch(updateTodo(todo._id, title));
    console.log('title', title)
  };

  const handleEditClick = () => {
    setEditing(true); // Enable editing mode when the edit icon is clicked
  };

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo?.done ? "line-through" : "",
        color: todo?.done ? "red" : "#34495e",
      }}
      data-testid="todo-test"
    >
      {editing ? (
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={title}
            className="edit-todo"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <span>
          Title: {todo?.title}
          <br />
          Description: {todo?.description}
        </span>
      )}

      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <i className="fas fa-trash" />
      </span>
      <span className="icon" onClick={handleEditClick}>
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};

export default Todo;
