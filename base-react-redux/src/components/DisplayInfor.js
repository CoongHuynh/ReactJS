import React from "react";

class DisplayInfor extends React.Component {
  render() {
    return (
      //props =>
      <div>
        <div>My name {this.props.name}</div>
        <div>My age: {this.props.age}</div>
      </div>
    );
  }
}
export default DisplayInfor;
