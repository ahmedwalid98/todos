import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoBody from "./TodoBody";

const initialData = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
const TodoContainer = () => {
  const [allTodos, setAllTodos] = useState(initialData);
  const [mode, setMode] = useState("add");
  const [activeTodo, setActiveTodo] = useState(null);
  const setToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  };
  const addNewTodo = (title) => {
    if (mode !== "edit") {
      const newTodo = {
        id: new Date().getTime(),
        title,
        done: false,
      };

      setAllTodos((data) => {
        return [newTodo, ...data];
      });
    } else if (mode === "edit") {
      const newTodos = allTodos.map((t) => {
        if (t.id === activeTodo.id) {
          t.title = title;
        }
        return t;
      });
      setAllTodos(newTodos);
      setMode("add");
    }
  };
  const handleDelete = (id) => {
    setAllTodos(allTodos.filter((el) => el.id !== id));
  };

  const handleToggle = (id) => {
    const newData = allTodos.map((td) => {
      if (td.id === id) {
        td.done = !td.done;
      }
      return td;
    });
    setAllTodos(newData);
  };

  const toggleFilter = () => {
    if (mode === "filter") {
      setMode("add");
    } else {
      setMode("filter");
    }
  };

  const toggleEdit = (todo) => {
    setMode("edit");
    setActiveTodo(todo);
  };
  let currentTodos = [...allTodos];

  if (mode === "filter") {
    currentTodos = allTodos.filter((el) => !el.done);
  }

  if (mode === "edit") {
    currentTodos = [activeTodo];
  }
  setToLocal();
  return (
    <main>
      <div className="container">
        <TodoInput
          addNewTodo={addNewTodo}
          toggleFilter={toggleFilter}
          activeTodo={activeTodo}
          mode={mode}
        />
        <TodoBody
          allTodos={currentTodos}
          mode={mode}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          toggleEdit={toggleEdit}
        />
      </div>
    </main>
  );
};

export default TodoContainer;
