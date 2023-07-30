import React from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Todo = ({ todo, deleteTodo, finishTodo, toggleEdit, mode }) => {
  console.log(todo.done);
  return (
    <div className={`todos ${todo.done ? "todos-done" : ""}`}>
      <div className="todos-todo_icon" onClick={() => finishTodo(todo.id)}>
        <FeatherIcon icon={todo.done ? "check-circle" : "circle"} />
      </div>
      <div className={`todos-todo_text ${todo.done ? "todos-text_done" : ""}`}>
        {todo.title}
      </div>
      {mode !== "edit" && (
        <div className="todos-todo_cta">
          <div className="todos-todo_cta-edit" onClick={() => toggleEdit(todo)}>
            <FeatherIcon icon="edit" size="20" />
          </div>
          <div
            lassName="todos-todo_cta-delete"
            onClick={() => deleteTodo(todo.id)}
          >
            <FeatherIcon icon="trash-2" size="20" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
