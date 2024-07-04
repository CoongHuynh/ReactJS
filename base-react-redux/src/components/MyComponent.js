import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Huynh",
    address: "hoi dan IT",
    age: 24,
  };

  handleClick(event) {
    console.log(" click me my button");

    //merge state => react class
    this.setState({
      name: "Cong Huynh",
      age: Math.floor(Math.random() * 100 + 1),
    });

    // this.setState({
    //   age: Math.floor(Math.random() * 100 + 1),
    // });
  }
  handleOnMouseOver(event) {
    console.log(event);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}> Hover me </button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          {" "}
          click{" "}
        </button>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
