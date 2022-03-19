import React from "react";
import Container from "react-bootstrap/Container";
import Video from "../assets/Videos/spaceVid.mp4";
import Mercury from "../components/Mercury/Mercury";
import "./SolarSystem.css"

function SolarSystem() {
  return (
  
    <Container id="SpaceBG" className="mt-0">
       <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>

          <Mercury/>

    </Container>
  );
}

export default SolarSystem;
