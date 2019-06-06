import React from "react";

export default class BtnClearCompleted extends React.Component {

hanldeClearCompletedItems = e => {
      e.preventDefault();
      this.props.clearCompletedItems();
    };
  render() {

    return (
      <div>
        <button
          className={"btn-clear"}
          onClick={e => this.hanldeClearCompletedItems(e)}
        >
          Clear Completed
        </button>
      </div>
    );
  }
}

