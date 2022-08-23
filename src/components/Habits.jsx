import React, { Component } from "react";
import Habit from "./Habit";
import HabitAdd from "./HabitAdd";

class Habits extends Component {
  handleIncreament = (habit) => {
    this.props.onIncreament(habit);
  };
  handleDecreament = (habit) => {
    this.props.onDecreament(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <>
        <HabitAdd onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit.id}
              onIncreament={this.handleIncreament}
              onDecreament={this.handleDecreament}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
