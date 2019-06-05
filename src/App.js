import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import { saveData, getData } from "./utilities/localStorage";

const defaultData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Organize Garage",
    id: 1528817077287,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: getData() || []
    };
  }
  addNewItem = async newTask => {
    if (newTask) {
      const newItem = {
        task: newTask,
        id: Date.now(),
        completed: false
      };
      const updatedStateData = [...this.state.data, newItem];
      await this.setState({ data: updatedStateData });
      await saveData(this.state.data);
    }
  };

  toggleStatusComplete = async dataItem => {
    let idx = null;
    const item = this.state.data.filter((item, index) => {
      if (item.id === dataItem.id) {
        idx = index;
        return item;
      }
      return undefined;
    });
    item[0].completed = !item[0].completed;
    const newData = this.state.data;
    newData.splice(idx, 1, item[0]);
    await this.setState({ data: newData });
    await saveData(this.state.data);
  };

  clearCompletedItems = async () => {
    const { data } = this.state;
    const itemsUndone = data.filter(item => item.completed === false);
    await this.setState({ data: itemsUndone });
    await saveData(this.state.data);
  };

  searchItems = async (value) => {
    const data = await getData();
    const matchingItems = data.filter(item => item.task.indexOf(value) > -1);
    this.setState({ data: matchingItems });
  }

  // componentDidMount() {
  //   this.clearCompletedItems();
  // }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h2>Welcome!</h2>
        <TodoList
          data={this.state.data}
          addNewItem={this.addNewItem}
          toggleComplete={this.toggleStatusComplete}
          clearCompletedItems={this.clearCompletedItems}
          searchItems={this.searchItems}
        />
      </div>
    );
  }
}

export default App;

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
