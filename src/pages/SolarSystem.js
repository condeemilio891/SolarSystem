import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Video from "../assets/Videos/spaceVid.mp4";
import Earth from "../components/Planets/Earth";
import Mercury from "../components/Planets/Mercury/Mercury";
import Venus from "../components/Planets/Venus/index"
import Mars from "../components/Planets/Mars/index"
import Jupiter from "../components/Planets/Jupiter";
import "./SolarSystem.css"



function SolarSystem() {

//  const [loading,setLoading]=useState(true);
//  const [weather, setWeather]= useState([]);
//  const [selectSol,setSelectedSol]=useState([])
//  const API="http://marsweather.ingenology.com/v1/latest/"  
//  useEffect(()=>{

//   const fetchFromAPI=async()=>{
//     const weather= await(await fetch( `https://cors-anywhere.herokuapp.com/${API}` )).json();
//     console.log(weather)
//   }
 
//   fetchFromAPI()
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
          <Mars/>
          <Jupiter/>
          
    </Container>
   
    </>
  );
}

export default SolarSystem;
