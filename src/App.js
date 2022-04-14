import React from "react";
import { BrowserRouter, HashRouter as Router, Route,Routes } from "react-router-dom";
import SolarSystem from "./pages/SolarSystem";
import DwarfPlanets from "./pages/DwarfPlanets";



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path= "/" element={<SolarSystem/>}/>
          <Route path= "dwarf" element={<DwarfPlanets/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
