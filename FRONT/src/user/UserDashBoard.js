import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const UserDashBoard = () => {

  const { user : { first_name, last_name, email, address,  phone}} = isAuthenticated();


  return (
    <Base title="UserDashBoard page">
        <ul className="list-group ">
                    <li className="list-group-item">
                        <span className="badge mr-2 bg-success">Name:</span> {first_name} {last_name} 
                        {/* {first_name} {last_name}  */}
                    </li>
                    <li className="list-group-item ">
                        <span className="badge mr-2 bg-success">Email:</span> {email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge bg-success mr-2">Phone:</span> {phone}
                    </li>
                    <li className="list-group-item">
                        <span className="badge bg-danger">User Area</span> {address}
                    </li>
                </ul>
    </Base>
  );
};

export default UserDashBoard;
