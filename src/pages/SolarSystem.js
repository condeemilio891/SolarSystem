import React from "react";
import Container from "react-bootstrap/Container";
import Video from "../assets/Videos/spaceVid.mp4";
import Mercury from "../components/Mercury/Mercury";
import GlassCard from "../components/GlassCard/GlassCard";
import Hermes from "../assets/Images/Hermes.webp"
import "./SolarSystem.css"
import { faMercury } from "@fortawesome/free-solid-svg-icons";

function SolarSystem() {
  return (
  
    <Container id="SpaceBG" className="mt-0">
       <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>

          <Mercury/>
        <GlassCard 
            title="Mercury"
            icon={faMercury}
            description=" Mercury appears as a morning or evening star. 
             In Classical Greece it was called Apollo when it appeared as a morning star just before sunrise and Hermes, the Greek equivalent of the Roman god Mercury, when it appeared as an evening star just after sunset.
            Hermes was the swift messenger of the gods, and the planet’s name is thus likely a reference to its rapid motions relative to other objects in the sky."
            planetImage={Hermes}
            fact1="Temperature-Day  883°F"
            fact2="Temperature-Night  -297°F"
            fact3="  No Moons"
            fact4= "57,909,227 km (35,983,125 mi)from the Sun"
            fact5="Orbital Period (1 Mercurial Year)is 88 days"
            fact6= "Rotational Period (1 Earth Year) is 58.7 days"
        />
    </Container>
  );
}

export default SolarSystem;
