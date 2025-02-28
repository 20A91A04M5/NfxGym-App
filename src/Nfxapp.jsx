// import React, { useState } from "react";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Nfxapp.css'
// import { Breadcrumb } from "antd";
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { logo } from "./assets";

// function Nfxapp(user) {
//     const [expanded, setExpanded] = useState(false);
//     return (
//         <>
//             <section id="sec1">
                
//                 <Navbar
//                     expanded={expanded}
//                     expand="lg"
//                     className="custom-navbar"
//                     sticky="top"
//                 >
//                     <Container>
//                         {/* Logo and App Name */}
//                         <Navbar.Brand href="/" className="navbar-brand">
//                             <img src={logo} alt="Gym Logo" width="100" height="100" />
//                             <span>GYM</span>
//                         </Navbar.Brand>

//                         {/* Hamburger menu button for small screens */}
//                         <Navbar.Toggle
//                             aria-controls="basic-navbar-nav"
//                             onClick={() => setExpanded(expanded ? false : "expanded")}
//                         />

//                         {/* Navigation Links */}
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <Nav className="ms-auto">
//                                 <Nav.Link
//                                     href="/home"
//                                     className="custom-nav-link"
//                                     onClick={() => setExpanded(false)}
//                                 >
//                                     HOME
//                                 </Nav.Link>
//                                 <Nav.Link
//                                     href="/exercises"
//                                     className="custom-nav-link"
//                                     onClick={() => setExpanded(false)}
//                                 >
//                                     EXERCISES
//                                 </Nav.Link>
//                                 <Nav.Link
//                                     href="/fooddiet"
//                                     className="custom-nav-link"
//                                     onClick={() => setExpanded(false)}
//                                 >
//                                     FOODDIET
//                                 </Nav.Link>
//                                 <Nav.Link
//                                     href="/bmi"
//                                     className="custom-nav-link"
//                                     onClick={() => setExpanded(false)}
//                                 >
//                                     BMI
//                                 </Nav.Link>
//                                 <Nav.Link
//                                     href="/logout"
//                                     className="custom-nav-link"
//                                     onClick={() => setExpanded(false)}
//                                 >
//                                     Logout
//                                 </Nav.Link>
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
//                 {/* <Breadcrumb
//                     items={[
//                         {
//                             title: 'Home',
//                         },
//                         {
//                             title: <a href="">Application Center</a>,
//                         },
//                         {
//                             title: <a href="">Application List</a>,
//                         },
//                         {
//                             title: 'An Application',
//                         },
//                     ]}
//                 /> */}
//             </section>
//         </>
//     )

// }
// export default Nfxapp

import React from "react";
import Homenfx from "./Nfxcomponents/Homenfx";
import { Route, Routes } from "react-router-dom";
import BMICalculator from "./Nfxcomponents/BmiCalci/Bmi";

function Nfxapp(){
    return (
        // <div className="Nfxapp">
            // <Homenfx />
             <Routes>
                <Route path="/" element={<Homenfx />} />
                <Route path="/Bmi" element={<BMICalculator />} />
            </Routes>
        // </div>
    )
}
export default Nfxapp;

