import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import TodoList from "./todo_list";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoList></TodoList>
  </React.StrictMode>
);
