// your components will all go in this `component` directory.
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import TodoSearch from "./TodoSearch";

import "./Todo.css";

// class ToDoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//   }
//   render() {
//     return (
//       <div>
//         <TodoForm addNewItem={this.props.addNewItem} />
//         {this.props.data.map((item, index) => {
//           return <Todo task={item.task} key={index} />;
//         })}
//       </div>
//     );
//   }
// }
const TodoList = props => (
  <div>
    <TodoForm
      addNewItem={props.addNewItem}
      clearCompletedItems={props.clearCompletedItems}
    />
    {props.data && props.data.map((item, index) => {
      return (
        <Todo key={index} item={item} toggleComplete={props.toggleComplete} />
      );
    })}
    <TodoSearch
      searchItems={props.searchItems}
    />
  </div>
);
export default TodoList;
