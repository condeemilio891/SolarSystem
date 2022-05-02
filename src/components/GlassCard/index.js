import React,{useState} from 'react'
import {useSpring, animated} from "react-spring"
import { ListGroupBody, ListGroup,ListGroupItem,PlanetImg,PlanetDescription,PlanetTitle,ProductContainer,PlanetFact, PlanetDescriptionDiv } from './GlassCardElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css"



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(6000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = (props) => {
    const [aprops, set]= useSpring(()=>({xys:[0,0,1], config:{mass:10, tension:50, friction:50}}))

 const[isOpen, setIsOpen]=useState(true)

  const toggle=()=>{
      setIsOpen(!isOpen)
  }
    return (
        <>
        <ProductContainer isOpen={isOpen}
        onMouseMove={({clientX: x, clientY: y})=>(set({xys: calc(x,y)}))}
        onMouseLeave= {()=> set({xys:[0,0,1]})}
        style={{
            transform:aprops.xys.interpolate(trans)
        }} 
        >
       
           
            <PlanetTitle>{props.title}</PlanetTitle>
            <FontAwesomeIcon className='reactiveXButton' size= "2x"style={{position:'absolute', top:0, right:0,color:"#1a2c80", cursor:'pointer'}} icon={props.Xbutton} 
             onClick={toggle}
            
            />
            <FontAwesomeIcon size= "6x" style={{position:'absolute', top:"1", left:"50%",color:"#1a2c80", }} icon={props.icon} />
            <ListGroupBody>
                <ListGroup>
                    <ListGroupItem>
                        {props.fact1}
                    </ListGroupItem>
                    <ListGroupItem>
                        {props.fact2}
                    </ListGroupItem>
                    <ListGroupItem>
                      {props.fact3}
                    </ListGroupItem>
                    <ListGroupItem>
                    {props.fact4}
                    </ListGroupItem>
                    <ListGroupItem>
                        {props.fact5}
                    </ListGroupItem>
                    <ListGroupItem>
                        {props.fact6}
                    </ListGroupItem>
                </ListGroup>
            </ListGroupBody>
            <PlanetDescriptionDiv>
            <PlanetDescription>{props.description}</PlanetDescription>
            </PlanetDescriptionDiv>
            <PlanetImg src={props.planetImage}/>
            <iframe class="NasaPlanet" 
            style={{   position:'absolute',
            zIndex:1,
            borderRadius:"50%",
            left:"65%",
            bottom:"80%",
            height:"10rem",
            width:'8rem',}} 
            src={props.nasaImage}></iframe>
        </ProductContainer>


</>
    )
}

export default GlassCard
