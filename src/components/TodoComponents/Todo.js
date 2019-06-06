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
        <div className="todo-item">
          <p><span className={this.props.item.completed ? "completed" : "not-completed"}>{this.props.item.task}</span></p>
          <p><button className="btn" onClick={this.handleToggleComplete}>{this.props.item.completed ? "Start again" : "Done"}</button></p>
        </div>
    );
  }
}

export default Todo;
