

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

