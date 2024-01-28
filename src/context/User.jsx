import { collection, doc, getDoc, query } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const signOutHandler=()=>{
    signOut(auth).then(() => {
      console.log("user Is OUTTT");
      setUser();
    }).catch((error) => {
        console.log(error);
    });
  }
  const onUserChange = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        try {
          const docSnapshot = await getDoc(userRef);
          const userDbData = docSnapshot.data();
          console.log(userDbData);
          setUser(userDbData);
        } catch (error) {
          console.log(error);
        }
      } else {
        setUser();
      }
    });
  };
  const setUserFromDb = async (user) => {
    console.log(user.uid);
    const userRef = doc(db, "users", user.uid);
    try {
      const docSnapshot = await getDoc(userRef);
      const userDbData = docSnapshot.data();
      setUser(userDbData);
    } catch (error) {
      console.log(error);
    }
  };
  const shared = { user, setUser, setUserFromDb, onUserChange, signOutHandler};
  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
// const darkModeColors = {
//   background: "black",
//   color: "white",
// };
// const lightModeColors = {
//   background: "white",
//   color: "black",
// };
// const [selectedTheme, setSelectedTheme] = useState(lightModeColors);
// const toggleMode = () => {
//   setIsLoginMode(!isLoginMode);
// };
// const toggleTheme = () => {
//   if (isDarkMode) {
//     setSelectedTheme(lightModeColors);
//     //   console.log(selectedTheme);
//   } else {
//     setSelectedTheme(darkModeColors);
//     //   console.log(selectedTheme);
//   }
//   setIsDarkMode(!isDarkMode);
// };
//   console.log({ isDarkMode, selectedTheme });
