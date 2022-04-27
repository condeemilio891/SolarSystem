import React from 'react'
import {Pgif,RoverImg,RoverTextContainer,RoverText} from './MarsWeatherElements'
import PerseveranceRoverImg from "../../assets/Images/PerseveranceRover.jpg"
import RoverCard from '../RoverCards/RoverCards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "./style.css"

const MarsWeather = () => {
  return (
    <>
    <Container>


       
        <Row>
            <iframe src='https://mars.nasa.gov/layout/embed/image/m20weather/'
            class="nasaIframe" scrolling='no' frameborder='0' allowfullscreen 
            ></iframe>
             <RoverCard rname="Perseverance" rdate="Landed: February 2021" 
        rdesc="Launched by Mars 2020 mission. Landed on Mars to look for signs of life and record what
        challenges humans may have should they live there."
        rphoto={PerseveranceRoverImg}/>
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