import React, { useState } from 'react'
import useSound from 'use-sound'
import { RCard,RPhoto,RInfoSection,RName,RDate,Rdivider,RDescription, RButton, RPhoto2,PlayButton,RPlayDescription
 } from './RoverCardElements'
import * as BsIcons from "react-icons/bs"

const RoverCard = (props) => {

   const [transform,setTransform]= useState(true);
   const [buttonText,setButtonText]= useState(true);
  const[play]=useSound(props.sound)
   const toggle=()=>{

    console.log("working")
     setTransform(!transform)
     setButtonText(!buttonText)
   }

   


  return (
    <RCard>
    <RButton
        onClick={toggle}
       
    >{buttonText ? "More Info":"+"}</RButton>
        <RInfoSection>
            <RName>{props.rname}</RName>
            <RDate>{props.rdate}</RDate>
            <Rdivider></Rdivider>
            <RDescription>{props.rdesc}</RDescription>
            <PlayButton onClick={play}>
              <BsIcons.BsPlayCircle size={30} />        
            </PlayButton>
            <RPlayDescription>{props.playDescription}</RPlayDescription>
        </RInfoSection>
        
        {transform ?<RPhoto src={props.rphoto}/>:<RPhoto2 src={props.rphoto}/>}
       
      
  
    </RCard>
  )
}

export default RoverCard