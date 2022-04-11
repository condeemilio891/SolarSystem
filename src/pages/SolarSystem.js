import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Video from "../assets/Videos/spaceVid.mp4";
import Earth from "../components/Planets/Earth";
import Mercury from "../components/Planets/Mercury/Mercury";
import Venus from "../components/Planets/Venus/index"
import Mars from "../components/Planets/Mars/index"
import Jupiter from "../components/Planets/Jupiter";
import Saturn from "../components/Planets/Saturn";
import Uranus from "../components/Planets/Uranus"
import "./SolarSystem.css"




function SolarSystem() {

//   const [loading,setLoading]=useState(true);
//   const [weather, setWeather]= useState([]);
//   const [selectSol,setSelectedSol]=useState([])
//   const API="https://api.maas2.jiinxt.com/"  
//   useEffect(()=>{

//    const fetchFromAPI=async()=>{
//      const weather= await(await fetch( API )).json();
//      console.log(weather)
//      const marsMaxTemp= weather.max_temp
//      const marsMin= weather.min_temp
//   }
 
//    fetchFromAPI()
//  }, [])
  return (
    <>
    <Container id="SpaceBG" className="mt-0">
       <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <Venus/>
          <Mercury/>
          <Earth/>
        {/* <Mars/> */}
          {/* <Jupiter/> */}
          {/* <Saturn/> */}
          <Uranus/>
          
    </Container>
   
    </>
  );
}

export default SolarSystem;
