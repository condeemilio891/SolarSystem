import React from "react";
import { BrowserRouter, HashRouter as Router, Route,Routes } from "react-router-dom";
import SolarSystem from "./pages/SolarSystem";
import DwarfPlanets from "./pages/DwarfPlanets";
import Sidebar from "./components/SideBar/Navbar";
import Canvas from "./components/Canvas/Canvas";



function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar/>
      <Routes>
          <Route path= "/" element={<SolarSystem/>}/>
          <Route path= "dwarf" element={<DwarfPlanets/>}/>
          {/* <Route path="canvas" element={<Canvas/>}/> */}
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
