import React, {useState } from 'react'

import useSound from 'use-sound'
import { RCard,RPhoto,RInfoSection,RName,RDate,Rdivider,RDescription, RButton, RPhoto2,PlayButton,RPlayDescription, Rdivider2
 } from './RoverCardElements'
import * as BsIcons from "react-icons/bs"

const RoverCard = (props) => {

   const [transform,setTransform]= useState(false);
   const [buttonText,setButtonText]= useState(false);
   const [playIcon,setPlayIcon]=useState(true);
  const[play, {stop, isPlaying}]=useSound(props.sound);
 

   const toggle=()=>{

    console.log("working")
     setTransform(!transform)
     setButtonText(!buttonText)
   }


   const togglePlayIcon=()=>{
     setPlayIcon(!playIcon);
   
    };

  return (
    <RCard>
    <RButton
        onClick={toggle}
       
    >{buttonText ? "More Info":"+"}</RButton>
        <RInfoSection>
            <RName>{props.rname}</RName>
            <RDate>{props.rdate}</RDate>
            <Rdivider/>
            <RDescription>{props.rdesc}</RDescription>
           
            
            <RPlayDescription>{props.playDescription}</RPlayDescription>
        </RInfoSection>
        <PlayButton onClick={togglePlayIcon} >
        {playIcon ? <BsIcons.BsPlayCircle size={30} onClick={play}/>:<BsIcons.BsPauseCircle size={30} onClick={()=>stop()} /> } 
       
            
            </PlayButton>
            
        {transform ?<RPhoto src={props.rphoto}/>:<RPhoto2 src={props.rphoto}/>}
       
      
  
    </RCard>
  )
}

export default RoverCard