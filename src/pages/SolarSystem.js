import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Video from "../assets/Videos/spaceVid.mp4";
import Earth from "../components/Planets/Earth";
import Mercury from "../components/Mercury/Mercury";
import Venus from "../components/Venus/index"
import Mars from "../components/Planets/Mars/index"
import Jupiter from "../components/Planets/Jupiter";
import "./SolarSystem.css"



function SolarSystem() {

 
  
  return (
    <>
    <Container id="SpaceBG" className="mt-0">
       <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <Venus/>
          <Mercury/>
          <Earth/>
          <Mars/>
          <Jupiter/>
          
    </Container>
   
    </>
  );
}

export default SolarSystem;
