import React, { useState } from 'react'
import { RCard,RPhoto,RInfoSection,RName,RDate,Rdivider,RDescription, RButton, RPhoto2 } from './RoverCardElements'


const RoverCard = (props) => {

   const [transform,setTransform]= useState(true);
   const [buttonText,setButtonText]= useState(true)

   const toggle=()=>{

    console.log("working")
     setTransform(!transform)
     setButtonText(!buttonText)
   }


  return (
    <RCard>
    <RButton
        onClick={toggle}
       
    >{buttonText ? "More Info":"Less Info"}</RButton>
        <RInfoSection>
            <RName>{props.rname}</RName>
            <RDate>{props.rdate}</RDate>
            <Rdivider></Rdivider>
            <RDescription>{props.rdesc}</RDescription>
        </RInfoSection>
        {transform ?<RPhoto src={props.rphoto}/>:<RPhoto2 src={props.rphoto}/>}
        {/* <RPhoto2 src={props.rphoto}
          /> */}
    </RCard>
  )
}

export default RoverCard