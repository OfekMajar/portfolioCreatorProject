import React, { useContext, useState } from "react";
import LogIn from "../../components/authComp/LogIn";
import SignUp from "../../components/authComp/SignUp";
import { UserContext } from "../../context/User";
import { auth, db } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./auth.css";
function Authentication(props) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [dataForm, setDataForm] = useState({});
  const { setUserFromDb } = useContext(UserContext);
  const navigate = useNavigate();
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };
  const changeHandler = (e) => {
    e.preventDefault();
    dataForm[e.target.name] = e.target.value;
    setDataForm({ ...dataForm });
  };
  const signUpHandler = (e) => {
    e.preventDefault();
    const { userPassword, userEmail, userName } = dataForm;

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          userEmail,
          userName,
          role: "regular",
          userId: user.uid,
        });
        setIsLoginMode(true);
        navigate("/")
        props.setShowLogin(false)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    const { userPassword, userEmail } = dataForm;
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        setUserFromDb(user);
        props.setShowLogin(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="authContainer">

      {isLoginMode ? (
        <LogIn
          toggleMode={toggleMode}
          changeHandler={changeHandler}
          sumbitHandler={loginHandler}
        />
      ) : (
        <SignUp
          toggleMode={toggleMode}
          changeHandler={changeHandler}
          sumbitHandler={signUpHandler}
        />
      )}
    </div>
  );
}

export default Authentication;
