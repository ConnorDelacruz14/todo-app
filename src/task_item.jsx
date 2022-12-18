import React from "react";
import "./styles/index.css";

function TaskItem(props) {
  return (
    <div
      className="task-item"
      style={{
        color: props.colors.text_color,
        backgroundColor: props.colors.item_bg_color,
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
      <div className="task-desc">{props.value}</div>
      <div className="task-delete" style={{ width: "18px", height: "18px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          style={{ display: "none" }}
        >
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default TaskItem;
