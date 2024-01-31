import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Authentication from "./pages/auth/Authentication";
import MyResumes from "./pages/myResumes/MyResumes";
import ResumeCreator from "./pages/resumeCreator/ResumeCreator";
import SingleResume from "./pages/singleResume/singleResume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/User";
import "./App.css";

function App() {
  const {  user } = useContext(UserContext);
 
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/MyResumes" element={<MyResumes />} />
          <Route path="/ResumeCreator" element={<ResumeCreator />} />
          <Route path="/MyResumes/:ResumeId" element={<SingleResume />   }/>
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
