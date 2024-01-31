import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserProvider from "./context/User.jsx";
import "./index.css";
import ResumesProvider from "./context/Resumes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ResumesProvider>
    <App />
    </ResumesProvider>
  </UserProvider>
);
