import React, { Component } from "react";
import ToDoItems from "./Components/Todoitems/Todoitems";
import AddItem from "./Components/Additems/Additem";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "karim", age: 20 },
      { id: 2, name: "ahmed", age: 22 },
      { id: 3, name: "mona", age: 23 }
    ]
  };
  // deleteItem
  deleteItem = id => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({ items });
  };
  // additem
  additem = item => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">
          <h1>To Do App</h1>
          <ToDoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItem addItem={this.additem} />
        </h1>
      </div>
    );
  }
}

export default App;
