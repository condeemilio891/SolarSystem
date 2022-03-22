import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Video from "../assets/Videos/spaceVid.mp4";
import Earth from "../components/Earth";
import Mercury from "../components/Mercury/Mercury";
import Venus from "../components/Venus/index"
import Mars from "../components/Mars/index"
import "./SolarSystem.css"



function SolarSystem() {

  // const[isOpen, setIsOpen]=useState(false)

  // const toggle=()=>{
  //     setIsOpen(!isOpen)
  // }
  
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
          
          
    </Container>
   
    </>
  );
}

export default SolarSystem;
