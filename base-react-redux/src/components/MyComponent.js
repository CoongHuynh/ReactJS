import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Huynh",
    address: "hoi dan IT",
    age: 24,
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
