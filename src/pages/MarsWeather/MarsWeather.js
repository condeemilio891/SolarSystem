import React, {useEffect,useState} from 'react'
import PerseveranceCarousel from '../../components/Carousel/PerseveranceCarousel'
import CuriosityCarousel from '../../components/Carousel/CuriosityCarousel'
import marsVideo from "../../assets/Videos/marsBackgroundVid.mp4"
import PerseveranceRoverImg from "../../assets/Images/PerseveranceRover.jpg"
import ingenuityImg from "../../assets/Images/IngenuityHeli.webp" 
import RoverCard from "../../components/RoverCards/RoverCards"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./style.css"
import { curiosityRoverAPIImage, RoverText } from './MarsWeatherElements'
import PerseveranceEssay from "../../assets/Music/PerseveranceEssay.mp4"
import ingenuityEssay from "../../assets/Music/ingenuityEssay.mp4"
import Tabs from "../../components/Tabs/Tab"
import curiosityPic from  "../../assets/Images/curiosityRover.jpg"
import curiosityLanding from "../../assets/Music/curiosityLanding.mp4"
import OpportunityRoverPic from "../../assets/Images/opportunityRoverPic.jpg"
import SpiritRoverPic from "../../assets/Images/spiritRoverPic.jpg"
import ZhurongRover from "../../assets/Images/zhurongRover.jpg"
import MarsPhotoSearch from '../../components/Carousel/MarsPhotoSearch'

const MarsWeather = () => {


  return (
    <>
    <Container id='marsBg' className='mt-0' >
      <video id='marsVideo' autoPlay loop muted>
      <source src={marsVideo} type="video/mp4" />

      </video>
      {/* search carousel */}
      
      <Row>
      <RoverText>Search Photos by Rover and Sol</RoverText>
      <MarsPhotoSearch/>
      </Row>

      {/* Carousel */}
    

      {/* first row of Cards */}
        <Row id='ingenuityRow'>
             <Col sm>
             <RoverCard rname="Perseverance" rdate="Landed: February 2021" 
        rdesc="Launched by Mars 2020 mission. Landed on Jezero crater to look for signs of life and record what
        challenges humans may have should they live there. The tools Perseverance weilds are equiped with the ability 
        to check for life. The mars rover can cut up and study rocks using X ray florescence to map the elemental composition of rocks. 
        It can also scan 30 meters underground using Radar"
        rphoto={PerseveranceRoverImg}
        playDescription="Alex Mather, Essay inspired Perseverance "
        sound={PerseveranceEssay}
        />
        </Col>
        <Col sm>
        
         <RoverCard rname="Ingenuity" rdate="Landed: February 2021" 
        rdesc="Helicopter that Launched alongside Perseverance. Mission: to survey area for exploration by Perseverance."
        rphoto={ingenuityImg}
        playDescription="From Vaneeza Rupani's essay which inspired Ingenuity"
        sound={ingenuityEssay}/>
        </Col>
        </Row>
      
     
        {/* Carousel */}
    
        <Row>
          <CuriosityCarousel/>
        </Row>

       {/* 2nd Row of cards */}
       
       <Row id='ingenuityRow'>
       <Col sm>
       <RoverCard rname="Curiosity" rdate="Landed: Saturday, November 26 2011" 
        rdesc="The Tuner laser Spectrometer notices a level of methane in the air that changes seasonally. Sometimes a 10x increase.
        This could be the result of metabolic processes or by chemical reactions between rocks and water? A negative sign is the amount of
        radiation '('both galactic and solar')' that Curiosity measured. A planet constantly bombarded by radation is not good for life."
        rphoto={curiosityPic}
        playDescription="Curiosity Touchdown Confirmed"
        sound={curiosityLanding}/>
        </Col>
        <Col sm >
         <RoverCard rname="Zhurong rover 祝融 " rdate="Landed: May 2021" 
        rdesc="Due to he red apperance on Mars, Zhurong is named after a Chinese mytho-historical figure associated with fire and light, 
         '('Chinese: 火星')' He is responsible for teaching humans to use fire and the Chinese people are hoping Zhurong will-- '''ignite the fire of interstellar exploration in China and to symbolize the Chinese people's determination to explore the stars and to uncover unknowns in the universe.'''"
        rphoto={ZhurongRover}
        playDescription="Curiosity Touchdown Confirmed"
        sound={curiosityLanding}/>
        </Col>
       </Row>
           {/* Weather Tabs */}
           <Row>
          <PerseveranceCarousel/>
        </Row>
       <Row id='ingenuityRow'>
         <Col>
       <RoverCard rname="Spirit" rdate="Landed: Saturday, January 24 2004" 
        rdesc="Spirit found an anomalous rock composed of Magnesium and iron carbonates, suggesting that a warmer, wetter
        and less acidic environment in Mars's past"
        rphoto={SpiritRoverPic}
        playDescription="Curiosity Touchdown Confirmed"
        sound={curiosityLanding}/>
        </Col>
        <Col>
         <RoverCard rname="Opportunity" rdate="Landed: January 3  2004" 
        rdesc="Upon landing, Opportunity found mineral hematite a sign of water. Another compelling piece of evidence
        is the discovery of clay on the Endeavor Crater"
        rphoto={OpportunityRoverPic}
        playDescription="Curiosity Touchdown Confirmed"
        sound={curiosityLanding}/>
        </Col>
       </Row>
       <Row>
         <Tabs/>
       </Row>

       
    </Container>
    </>
  )
}

export default MarsWeather