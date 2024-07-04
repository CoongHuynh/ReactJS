import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "hoi dan it", age: "24" },
      { id: 2, name: "Huynh", age: "27" },
      { id: 3, name: "CongHuynh", age: "29" },
    ],
  };

  //JSX
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
