import React from "react";
import { BrowserRouter, HashRouter as Router, Route,Routes } from "react-router-dom";
import SolarSystem from "./pages/SolarSystem";
import DwarfPlanets from "./pages/DwarfPlanets";
import Sidebar from "./components/SideBar/Navbar";
import Canvas from "./components/Canvas/Canvas";
import MarsWeather from "./components/MarsWeather/MarsWeather";



function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar/>
      <Routes>
          <Route path= "/" element={<SolarSystem/>}/>
          <Route path= "dwarf" element={<DwarfPlanets/>}/>
          {/* <Route path="canvas" element={<Canvas/>}/> */}
          <Route path="marsweather" element={<MarsWeather/>} />
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
