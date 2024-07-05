import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "hoi dan it", age: "15" },
      { id: 2, name: "Huynh", age: "27" },
      { id: 3, name: "CongHuynh", age: "29" },
    ],
  };

  handleAddNewUser = (userObj) => {
    // let listUsersNew = this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // this.setState({
    //   listUsers: listUsersNew,
    // });

    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  //JSX
  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
