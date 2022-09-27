import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

import "./style.css";

function Profile() {

const user = useSelector(selectUser)

  return (
    <div className="profileScreen">
      <div className="profileScreen--body">
        <h1>Edit Profile</h1>
        <div className="profileScreen--info">
          <img    className="nav_avatar" src="avatar__chilltv.png" alt="" />
          <div className="profileScreen--detail">
            <h2>{user.email}</h2>
            <div className="profileScreen--signOut">
              <button onClick={() => auth.signOut()} 
              className="profileScreen--button">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
