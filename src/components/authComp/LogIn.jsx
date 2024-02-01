import React from "react";

function LogIn({ sumbitHandler, changeHandler, toggleMode }) {
  return (
    <div className="logInModeContainer">
      <div className="box">
        <div className="lockBox">
          {" "}
          <i className="fa-solid fa-lock lockIcon"></i>
        </div>

        <h1>Login</h1>
        <form onSubmit={sumbitHandler}>
          <div className="authLableAndInput">
            <label htmlFor="userEmailInput">Email:</label>
            <input
              className="authInput"
              onChange={changeHandler}
              type="email"
              name="userEmail"
              id="userEmailInput"
              required
            />
          </div>
          <div className="authLableAndInput">
            <label htmlFor="userPasswordInput">Password:</label>
            <input
              className="authInput"
              onChange={changeHandler}
              type="password"
              name="userPassword"
              id="userPasswordInput"
              required
            />
          </div>
          <button className="authSumbitBtn" type="sumbit">
            login
          </button>
        </form>
        <p className="switchSignUpLogInBtn" type="button" onClick={toggleMode}>
          don't have an account click here
        </p>
      </div>
    </div>
  );
}

export default LogIn;
