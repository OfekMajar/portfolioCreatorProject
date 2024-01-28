import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Authentication from "./pages/auth/Authentication";
import MyResumes from "./pages/myResumes/MyResumes";
import ResumeCreator from "./pages/resumeCreator/ResumeCreator";
import ResumeOptions from "./pages/resumeOptions/ResumeOptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/User";
import "./App.css";

function App() {
  const { onUserChange, user } = useContext(UserContext);
  let isInitialRender = true
  useEffect(() => {
    if (isInitialRender) {
      isInitialRender = false;
      return;
    }
    onUserChange();
  }, [user]);
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/MyResumes" element={<MyResumes />} />
          <Route path="/ResumeCreator" element={<ResumeCreator />} />
          <Route path="/ResumeOptions" element={<ResumeOptions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
