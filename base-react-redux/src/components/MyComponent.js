import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="hoi dan it" age="24" />
        <hr></hr>
        <DisplayInfor name="HOi DAN IT" age="26" />
      </div>
    );
  }
}

export default MyComponent;
