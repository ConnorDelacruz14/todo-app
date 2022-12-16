import React from "react";
import "./styles/index.css";
import TaskItem from "./task_item";
import DisplayIcon from "./display_icons";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      num_tasks: 0,
      dark_mode: true,
      display_mode: "dark",
    };
    this.handleDisplayModeClick = this.handleDisplayModeClick.bind(this);
  }

  handleDisplayModeClick() {
    this.setState((prevState) => {
      return {
        dark_mode: !prevState.dark_mode,
        display_mode: prevState.dark_mode ? "light" : "dark",
      };
    });
  }

  renderAllTasks() {
    return this.state.tasks;
  }

  renderTask(event) {
    event.preventDefault();
    let new_task = (
      <TaskItem
        key={this.state.num_tasks.toString()}
        value={document.getElementById("task-input").value}
      ></TaskItem>
    );
    this.setState((prevState) => {
      return {
        tasks: [new_task, ...prevState.tasks],
        num_tasks: prevState.num_tasks + 1,
      };
    });
    event.target.reset();
  }

  render() {
    return (
      <div className="todo-list">
        <h1 className="todo-header">
          TODO
          <button
            className="display-control"
            onClick={() => {
              this.handleDisplayModeClick();
            }}
            style={{ background: "None", border: "None" }}
          >
            <DisplayIcon dark_mode={this.state.dark_mode}></DisplayIcon>
          </button>
        </h1>
        <div className="new-todo">
          <form
            onSubmit={(event) => {
              this.renderTask(event);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
            <input
              type={"text"}
              id="task-input"
              className="new-todo-desc"
              placeholder="Create a new todo..."
            />
          </form>
        </div>
        <div className="task-list">
          {this.state.tasks}
          <div className="option-bar">
            <div className="remaining-items">5 items left</div>
            <button className="all">All</button>
            <button className="active">Active</button>
            <button className="completed">Completed</button>
            <button className="clear-completed">Clear Completed</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
