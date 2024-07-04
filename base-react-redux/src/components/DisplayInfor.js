import React from "react";

class DisplayInfor extends React.Component {
  state = { isShowListUser: true };

  handleShowHide = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };

  // destructuring array/object
  render() {
    const { listUsers } = this.props;

    return (
      <div>
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
                  <div>My name {user.name}</div>
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
