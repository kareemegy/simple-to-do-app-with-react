import React, { Component } from "react";
import "./Additem.css";
class AddItem extends Component {
  state = {
    name: "",
    age: ""
  };
  // handleChange
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  // handleSubmite
  handleSubmite = e => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      age: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmite}>
          <input
            className="name"
            type="text"
            placeholder="Enter Name..."
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            className="number"
            type="number"
            placeholder="Enter Age..."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItem;
