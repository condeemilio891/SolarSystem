import React, {useEffect, useState} from "react";
import useSound from 'use-sound'
import { FaUserAstronaut } from 'react-icons/fa'
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
import axios from "axios";




function SolarSystem() {
  

 
  const [loading,setLoading]=useState(false)
  const [peopleInSpace,setPeopleInSpace]=useState('')
  
  

      const getPeopleInSpace=()=>{
          setLoading(true);
             
      axios 
      .get(`http://api.open-notify.org/astros.json`)
  
  
   .then(res=>{
    setPeopleInSpace(res.data.people);
    setLoading(false)
  
  console.log(res.data.people);
  
   })
   .catch(error => {
      setLoading(false);
      console.log("error", error);
    });
      }


  useEffect(()=>{
   
      getPeopleInSpace();
  
  },[]);

  
  return (
    
    <>
    <Container id="SpaceBG" className="mt-0">
       <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          {/* <h1 className="peopleInSpaceh1">People In  </h1>   
          <h1 className="peopleInSpaceh1">Space Right Now </h1>
          <h1 className="peopleInSpaceh1">by Astros API </h1>     */}
          { peopleInSpace && peopleInSpace.map(({ name, craft }) => (
            <div className="peopleInSpaceliCard">
        <p key={name} className="peopleInSpaceli"><FaUserAstronaut/> {name} on the {craft} </p>
        </div>
      ))}
              
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
