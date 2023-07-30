import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";

const TodoInput = ({ addNewTodo, toggleFilter, mode, activeTodo }) => {
  const [todo, setTodo] = useState("");
  const handleTodos = (e) => {
    e.preventDefault();
    addNewTodo(todo);
    setTodo("");
  };
  useEffect(() => {
    if (activeTodo) {
      setTodo(activeTodo.title);
    }
  }, [setTodo, activeTodo]);
  console.log(activeTodo);
  return (
    <form className="todos-form" onSubmit={handleTodos}>
      <div
        className={`form-icon ${mode === "filter" ? "active" : ""}`}
        onClick={toggleFilter}
      >
        <FeatherIcon icon="circle" />
      </div>
      <input
        type="text"
        id="addTodo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="اضف مهمه جديدة.."
      ></input>
      <button className="btn" disabled={!todo.trim()}>
        {mode === "edit" ? "تعديل" : "اضافة"}
      </button>
    </form>
  );
};

export default TodoInput;
