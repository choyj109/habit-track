import React, { memo } from "react";

const HabitAdd = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Habit"
        className="add-input"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAdd;
