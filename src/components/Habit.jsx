import React, { Component } from "react";

class Habit extends Component {
  handleIncreament = () => {
    this.props.onIncreament(this.props.habit);
  };
  handleDecreament = () => {
    this.props.onDecreament(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <div className="habitSpan">
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
        </div>
        <div className="habitBtn">
          <button
            className="habit-button habit-increase"
            onClick={this.handleIncreament}
          >
            <i className="fa-solid fa-square-plus"></i>
          </button>
          <button
            className="habit-button habit-decrease"
            onClick={this.handleDecreament}
          >
            <i className="fa-solid fa-square-minus"></i>
          </button>
          <button
            className="habit-button habit-delete"
            onClick={this.handleDelete}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Habit;
