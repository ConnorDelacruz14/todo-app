import React from "react";
import "./styles/index.css";
import TaskItem from "./task_item";
import DisplayIcon from "./display_icons";
import bg_desktop_dark from "./styles/images/bg-desktop-dark.jpg";
import bg_desktop_light from "./styles/images/bg-desktop-light.jpg";

const dark_mode_colors = {
  text_color: "hsl(234, 39%, 85%)",
  item_bg_color: "hsl(235, 24%, 19%)",
  bg_color: "hsl(235, 21%, 11%)",
};

const light_mode_colors = {
  text_color: "hsl(235, 19%, 35%)",
  item_bg_color: "white",
  bg_color: "white",
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      num_tasks: 0,
      dark_mode: true,
      display_mode: "dark",
      colors: dark_mode_colors,
    };
    this.handleDisplayModeClick = this.handleDisplayModeClick.bind(this);
  }

  handleDisplayModeClick() {
    this.setState((prevState) => {
      document.getElementById("image-header").style.backgroundImage =
        prevState.dark_mode
          ? `url(${bg_desktop_light})`
          : `url(${bg_desktop_dark})`;
      document.body.style.backgroundColor = prevState.dark_mode
        ? "white"
        : dark_mode_colors.bg_color;
      document.getElementById("new-todo").style.backgroundColor =
        prevState.dark_mode ? "white" : dark_mode_colors.item_bg_color;
      document.getElementById("new-todo").style.color = prevState.dark_mode
        ? "hsl(234, 11%, 52%)"
        : "white";
      let tasks = document.getElementsByClassName("task-item");
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.backgroundColor = prevState.dark_mode
          ? light_mode_colors.item_bg_color
          : dark_mode_colors.item_bg_color;
        tasks[i].style.color = prevState.dark_mode
          ? light_mode_colors.text_color
          : dark_mode_colors.text_color;
      }
      document.getElementById("option-bar").style.backgroundColor =
        prevState.dark_mode ? "white" : dark_mode_colors.item_bg_color;
      document.getElementById("option-bar").style.color = prevState.dark_mode
        ? "hsl(236, 9%, 61%)"
        : "hsl(235deg, 19%, 35%)";
      return {
        dark_mode: !prevState.dark_mode,
        display_mode: prevState.dark_mode ? "light" : "dark",
        colors: prevState.dark_mode ? light_mode_colors : dark_mode_colors,
      };
    });
  }

  renderAllTasks() {
    return this.state.tasks.map((task) => {
      return (
        <TaskItem
          key={task.key}
          value={task.props.value}
          colors={this.state.colors}
        ></TaskItem>
      );
    });
  }

  renderTask(event) {
    event.preventDefault();
    let new_task = (
      <TaskItem
        key={this.state.num_tasks.toString()}
        value={document.getElementById("task-input").value}
        colors={this.state.colors}
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
      <div className="todo-list" id="todo-list">
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
        <div className="new-todo" id="new-todo">
          <form
            onSubmit={(event) => {
              this.renderTask(event);
            }}
          >
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 12"
                className="check-mark"
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="1"
                  d="M1 4.304L3.696 7l6-6"
                />
              </svg>
            </div>
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
          <div className="option-bar" id="option-bar">
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
