import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
// class DisplayInfor extends React.Component {

//   // destructuring array/object
//   render() {
//     console.log(">>> Cal me render");
//     const { listUsers } = this.props;

//     return (
//       <div className="display-infor-container">

//         {this.state.isShowListUser && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name {user.name}</div>
//                   <div>My age: {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => {
//                         this.props.handleDeleteUser(user.id);
//                       }}
//                     >
//                       {" "}
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }
//}
const DisplayInfor = (props) => {
  const { listUsers } = props;

  return (
    <div className="display-infor-container">
      {true && (
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
