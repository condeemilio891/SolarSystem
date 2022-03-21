import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Video from "../assets/Videos/spaceVid.mp4";
import Mercury from "../components/Mercury/Mercury";
import Venus from "../components/Venus/index"
import "./SolarSystem.css"


class SolarSystem extends React.Component() {

  state={showing:false}

  render(){
   const {showing}=this.state
  return (
    
 
    <>
    <Container id="SpaceBG" className="mt-0">
       <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <Venus/>
          <Mercury onClick={() => this.setState({ showing: !showing })}/>
          
    </Container>
    </>
  )};
}

export default SolarSystem;
