import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Huynh",
    address: "hoi dan IT",
    age: 24,
  };

  handleClick(event) {
    console.log(" click me my button");
    console.log("my name is: ", this.state.name);
  }
  handleOnMouseOver(event) {
    console.log(event);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}> Hover me </button>
        <button onClick={this.handleClick}> click </button>
      </div>
    );
  }
}

export default MyComponent;
