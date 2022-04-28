import React from 'react'
import marsVideo from "../../assets/Videos/marsBackgroundVid.mp4"
import PerseveranceRoverImg from "../../assets/Images/PerseveranceRover.jpg"
import ingenuityImg from "../../assets/Images/IngenuityHeli.webp" 
import RoverCard from "../../components/RoverCards/RoverCards"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "./style.css"
import PerseveranceEssay from "../../assets/Music/PerseveranceEssay.mp4"
import ingenuityEssay from "../../assets/Music/ingenuityEssay.mp4"

const MarsWeather = () => {


  return (
    <>
    <Container id='marsBg' className='mt-0' >
      <video id='marsVideo' autoPlay loop muted>
      <source src={marsVideo} type="video/mp4" />

      </video>


       
        <Row id='ingenuityRow'>
            <iframe src='https://mars.nasa.gov/layout/embed/image/m20weather/'
            class="nasaIframe" scrolling='no' frameborder='0' allowfullscreen 
            ></iframe>

             <RoverCard rname="Perseverance" rdate="Landed: February 2021" 
        rdesc="Launched by Mars 2020 mission. Landed on Mars to look for signs of life and record what
        challenges humans may have should they live there."
        rphoto={PerseveranceRoverImg}
        playDescription="Alex Mather, the Virginia student who named the Perseverance rover"
        sound={PerseveranceEssay}
        />

         <RoverCard rname="Ingenuity" rdate="Landed: February 2021" 
        rdesc="Launched by Mars 2020 mission. Landed on Mars to look for signs of life and record what
        challenges humans may have should they live there."
        rphoto={ingenuityImg}
        playDescription="From Vaneeza Rupani's essay which inspired the name ingenuity"
        sound={ingenuityEssay}/>
        </Row>
        {/* <Row>
            <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='800' height='530'  
            scrolling='no' frameborder='0'></iframe>
        </Row>
        <Row>
            <iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='800' height='530'  scrolling='no' frameborder='0'></iframe>
        </Row> */}
    </Container>
    </>
  )
}

export default MarsWeather