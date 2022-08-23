import React, { PureComponent } from "react";
import "../index.css";

class Navbar extends PureComponent {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fa-solid fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
