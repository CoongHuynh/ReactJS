import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "hoi dan it", age: "15" },
    { id: 2, name: "Huynh", age: "27" },
    { id: 3, name: "CongHuynh", age: "29" },
  ]);
  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
    //     this.setState({
    //       listUsers: [userObj, ...this.state.listUsers],
    //     });
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);

    setListUsers(listUsersClone);
    //     let listUsersClone = this.state.listUsers;
    //     listUsersClone = listUsersClone.filter((item) => item.id !== userId);

    //     this.setState({
    //       listUsers: listUsersClone,
    //     });
  };
  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};
export default MyComponent;
