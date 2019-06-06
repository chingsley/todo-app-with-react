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
    window.location.reload();
  };
 
  render() {
    // console.log(this.state.userInput);
    return (
      <form className="form">
        <div className="flexbox">
          <input
            className="input-new-item"
            placeholder="add new item"
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <button className={"btn-add-new-item"} onClick={e => this.onAddItem(e)}>Add</button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
