import React from "react";
import Todo from "./Todo";

const TodoBody = ({
  allTodos,
  handleDelete,
  handleToggle,
  toggleEdit,
  mode,
}) => {
  return (
    <div className="todo-list">
      {allTodos.length === 0 ? (
        <div className="no-todos-text">لا توجد مهام حالية..</div>
      ) : (
        allTodos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            mode={mode}
            deleteTodo={handleDelete}
            toggleEdit={toggleEdit}
            finishTodo={handleToggle}
          />
        ))
      )}
    </div>
  );
};

export default TodoBody;
