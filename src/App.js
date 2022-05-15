import React from "react";
import { BrowserRouter, HashRouter as Router, Route,Routes } from "react-router-dom";
import SolarSystem from "./pages/SolarSystem";
import DwarfPlanets from "./pages/DwarfPlanets";
import Sidebar from "./components/SideBar/Navbar";
import Canvas from "./components/Canvas/Canvas";
import MarsWeather from "./pages/MarsWeather/MarsWeather";
import TestPage from "./pages/TestPage"



function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar/>
      <Routes>
          <Route path= "solarsystem" element={<SolarSystem/>}/>
          <Route path= "dwarf" element={<DwarfPlanets/>}/>
          {/* <Route path="canvas" element={<Canvas/>}/> */}
          <Route path="/" element={<MarsWeather/>} />
          <Route path= "test" element={<TestPage/>}/>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
