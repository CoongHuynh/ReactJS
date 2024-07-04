import React from "react";

class DisplayInfor extends React.Component {
  // destructuring array/object
  render() {
    const { listUsers } = this.props;

    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name {user.name}</div>
              <div>My age: {user.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
export default DisplayInfor;
