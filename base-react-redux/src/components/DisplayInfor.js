import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";

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

  useEffect(() => {
    setTimeout(() => {
      document.title = "Eric && Hoi dan IT";
    }, 3000);
  }, []);

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You delete all user");
    }
    console.log(">>> Call me useEffect");
  }, [listUsers]);

  console.log("call me render");
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
