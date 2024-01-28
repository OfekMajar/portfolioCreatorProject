import React from 'react'

function LogIn({sumbitHandler,changeHandler,toggleMode}) {
  return (
    <div className='logInModeContainer'>
     <form onSubmit={sumbitHandler}>
        <label htmlFor="userEmailInput">Email:</label>
        <input className='authInput' onChange={changeHandler}  type="email" name='userEmail' id='userEmailInput' required/>
        <label htmlFor="userPasswordInput">Password:</label>
        <input className='authInput' onChange={changeHandler} type="password" name='userPassword' id='userPasswordInput' required/>
        <button type='sumbit'>login</button>
     </form>
     <button className='switchSignUpLogInBtn' type='button' onClick={toggleMode}>don't have an account click here</button>
    </div>
  )
}

export default LogIn
