import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

//stateless tức không có state thì có thể sài funtion component
//statefull: khi funtion cần kiểm soát data (có state) thì cần sử dụng class component
const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHideListuser, setShowHideListUser] = useState(true);
  // this.state = { isShowHideListuser: true };

  const handleShowHideListUser = () => {
    // this.setState({ isShowHideListuser: true });
    setShowHideListUser(!isShowHideListuser);
  };

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListuser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListuser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name {user.name}</div>
                <div>My age: {user.age}</div>
                <div>
                  <button
                    onClick={() => {
                      props.handleDeleteUser(user.id);
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
