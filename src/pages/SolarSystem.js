import React, {useEffect, useState} from "react";
import useSound from 'use-sound'
import Container from "react-bootstrap/Container";
import Video from "../assets/Videos/spaceVid.mp4";
import Earth from "../components/Planets/Earth";
import Mercury from "../components/Planets/Mercury/Mercury";
import Venus from "../components/Planets/Venus/index"
import Mars from "../components/Planets/Mars/index"
import Jupiter from "../components/Planets/Jupiter";
import Saturn from "../components/Planets/Saturn";
import Uranus from "../components/Planets/Uranus"
import Neptune from "../components/Planets/Neptune"
import HelloFromEarth from "../assets/Music/EarthTitleSound.mp4"
import "./SolarSystem.css"




function SolarSystem() {
  

  // useEffect(()=> {
  //   fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000`,
  //   {method:"GET"
  //   })
  // })

  //   .then(data=>data.json())
  //   .then(
  //     (result)=>
  //     console.log(result),

  //   [])

    // componentDidMount(){
    //   fetch("https://api.maas2.jiinxt.com/"  )
    //   .then(res=>res.json())
      
    //   .then(
    //     (result)=>
    //     console.log(result.max_temp),
    //     console.log(result)
    //     {
                
    //       this.setState({
    //         weatherMax:result.max_temp,
    //         weatherMin:result.min_temp
            
    //       })
    //     }
  
  return (
    
    <>
    <Container id="SpaceBG" className="mt-0">
       <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <Venus/>
          <Mercury/>
          <Earth />
        <Mars/>
          <Jupiter/>
          <Saturn/>
          <Uranus/>
          <Neptune/>
       
          
    </Container>
   
    </>
  );
}

export default SolarSystem;
