import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { Practice } from './PracticeQuestion'
import "./index.css";
// import "./styles.css";

import App from "./App.jsx";
// import Profile from './assets/ProfileCard'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Practice/> */}
    {/* <Profile></Profile> */}
  </StrictMode>,
);
