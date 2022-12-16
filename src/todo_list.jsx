import React from "react";
import "./styles/index.css";

function TaskItem(props) {
  return (
    <div className="task-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>
      <div className="task-desc">{props.value}</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill="#494C6B"
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </div>
  );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      num_tasks: 0,
    };
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
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
            />
          </svg>
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
