import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>> Call contrustor: 1");
    super(props);
    //babal compiler
    this.state = { isShowListUser: true };
  }

  componentDidMount() {
    console.log(">>> Call me component did mount");
    setTimeout(() => {
      document.title = "Eric && Hỏi dân IT";
    }, 3000);
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log(">>> Call me component did update");
    if (this.props.listUsers !== preProps.listUsers) {
      console.log(">>1", this.props.listUsers.length);
      if (this.props.listUsers.length === 5) {
        alert("You got 5 users");
      }
    }
  }

  handleShowHide = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };

  // destructuring array/object
  render() {
    console.log(">>> Cal me render");
    const { listUsers } = this.props;

    return (
      <div className="display-infor-container">
        <div className="img">{/* <img src={logo} /> */}</div>
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
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name {user.name}</div>
                  <div>My age: {user.age}</div>
                  <div>
                    <button
                      onClick={() => {
                        this.props.handleDeleteUser(user.id);
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
  }
}
export default DisplayInfor;
