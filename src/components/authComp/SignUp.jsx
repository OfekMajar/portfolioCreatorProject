import React from 'react'

function SignUp({sumbitHandler,changeHandler,toggleMode}) {
  return (
    <div className='logInModeContainer'>
      <div className="box">
      <div className="lockBox">
          {" "}
          <i className="fa-solid fa-lock lockIcon"></i>
        </div>
        <h1>Sign Up</h1>
       <form onSubmit={sumbitHandler}>
       <div className="authLableAndInput">
        <label htmlFor="userNameInput">Username:</label>
        <input className='authInput' onChange={changeHandler} type="text" name='userName' id='userNameInput' required/> 
        </div>
        <div className="authLableAndInput">
        <label htmlFor="userEmailInput">Email:</label>
        <input className='authInput' onChange={changeHandler}  type="email" name='userEmail' id='userEmailInput' required/>
        </div>
        <div className="authLableAndInput">
        <label htmlFor="userPasswordInput">Password:</label>
        <input className='authInput' onChange={changeHandler}  type="password" name='userPassword' id='userPasswordInput' required/>
        </div>
        <button  className="authSumbitBtn" type='sumbit'>Sign up</button>
     </form>
     <p className='switchSignUpLogInBtn' type='button' onClick={toggleMode}>already have an account click here</p>
     </div>
    </div>
  )
}

export default SignUp
