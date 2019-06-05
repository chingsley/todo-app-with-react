import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  handleToggleComplete = () => {
    this.props.toggleComplete(this.props.item);
  };
  render() {
    return (
      <>
        <p>
          <span className={this.props.item.completed ? "completed" : "not-completed"}>{this.props.item.task}</span>
          <button onClick={this.handleToggleComplete}>{this.props.item.completed ? "start again" : "done"}</button>
        </p>
      </>
    );
  }
}

export default Todo;
