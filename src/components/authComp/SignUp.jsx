import React from 'react'

function SignUp({sumbitHandler,changeHandler,toggleMode}) {
  return (
    <div className='logInModeContainer'>
       <form onSubmit={sumbitHandler}>
        <label htmlFor="userNameInput">Username:</label>
        <input className='authInput' onChange={changeHandler} type="text" name='userName' id='userNameInput' required/> 
        <label htmlFor="userEmailInput">Email:</label>
        <input className='authInput' onChange={changeHandler}  type="email" name='userEmail' id='userEmailInput' required/>
        <label htmlFor="userPasswordInput">Password:</label>
        <input className='authInput' onChange={changeHandler}  type="password" name='userPassword' id='userPasswordInput' required/>
        <button type='sumbit'>Sign up</button>
     </form>
     <button className='switchSignUpLogInBtn' type='button' onClick={toggleMode}>already have an account click here</button>

    </div>
  )
}

export default SignUp
