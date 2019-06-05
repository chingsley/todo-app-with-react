import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      userInput: ""
    };
  }
  onAddItem = (e) => {
    e.preventDefault();
    this.props.addNewItem(this.state.userInput);
  };
  hanldeClearCompletedItems = (e) => {
    e.preventDefault();
    this.props.clearCompletedItems()
  }
  render() {
    // console.log(this.state.userInput);
    return (
      <form>
        <input
          placeholder="enter a todo item"
          onChange={e => this.setState({ userInput: e.target.value })}
        />
        <button onClick={e => this.onAddItem(e)}>Add</button>
        <button onClick={e => this.hanldeClearCompletedItems(e)}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
