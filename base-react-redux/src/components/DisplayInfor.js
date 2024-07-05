import React from "react";
import "./DisplayInfor.scss";
class DisplayInfor extends React.Component {
  state = { isShowListUser: true };

  handleShowHide = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };

  // destructuring array/object
  render() {
    const { listUsers } = this.props;

    return (
      <div className="display-infor-container">
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list user:"
              : "Hide list user:"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div style={{ color: "yellow", paddingTop: "50px" }}>
                    My name {user.name}
                  </div>
                  <div>My age: {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
