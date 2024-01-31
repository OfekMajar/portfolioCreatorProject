import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { UserContext } from "./User";

export const ResumesContext = createContext({});

export default function ResumesProvider({ children }) {
  const { user } = useContext(UserContext);
  const [resumes, setResumes] = useState([]);

  const resumesFromDb = async () => {

    try {
      const collectionRef =collection(db, "Resumes")
      const q = query(collectionRef, where("userId", "==", user.userId));
      const querySnapshot = await getDocs(q);
      const tempResumes=[]
      querySnapshot.docs.forEach((item) => {
        tempResumes.push(item.data());
      });
      setResumes(tempResumes)
    } catch (error) {
      console.log(error);
    }
  };
  const shared = { resumes, resumesFromDb };
  return (
    <ResumesContext.Provider value={shared}>{children}</ResumesContext.Provider>
  );
}
