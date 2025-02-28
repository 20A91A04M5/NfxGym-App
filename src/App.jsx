import React, { useEffect } from "react";
import "./Land.css";
// import { logo,im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12 } from "./assets";

import 'bootstrap/dist/css/bootstrap.min.css';

// If you need the Bootstrap JS components:
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import LoginForm from "./Components/Login";
// import SignupPage from "./Components/Signup";
import Landingpage from "./Landingpage";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Components/Login";
import SignupPage from "./Components/Signup";
import Nfxapp from "./Nfxapp";


const App = () => {
  return (
    <>
      {/* <Landingpage /> */}
      <Routes>
        <Route path="/" element={<Landingpage />}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Nfxapp" element={<Nfxapp />} />
      </Routes>
    </>
  );
};

export default App;
