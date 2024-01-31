import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { UserContext } from "../../context/User";
import "./header.css";
function Header() {
  const { user, signOutHandler } = useContext(UserContext);
  return (
    <header id="headerContainer">
      {user ? (
        <div className="userNameDisplay">
          <p>{user.userName}</p>
          <button className="authNavBtn" onClick={signOutHandler}>LogOut</button>
        </div>
      ) : (
        <div className="userNameDisplay">
          <p>guest</p>
          <button className="authNavBtn">
            <Link to={"/Authentication"}>Login</Link>
          </button>
        </div>
      )}
      <Navbar />
   
    </header>
  );
}

export default Header;
