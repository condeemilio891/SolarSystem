import React from "react";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, HashRouter as Router, Route,Routes } from "react-router-dom";
import SolarSystem from "./pages/SolarSystem";
import DwarfPlanets from "./pages/DwarfPlanets";



function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
          <Route path= "/" element={<SolarSystem/>}/>
          <Route path= "dwarf" element={<DwarfPlanets/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
