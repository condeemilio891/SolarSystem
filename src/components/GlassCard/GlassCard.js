import React from 'react'
import {useSpring, animated} from "react-spring"
import { ListGroupBody, ListGroup,ListGroupItem,PlanetImg,PlanetDescription,PlanetTitle,ProductContainer,PlanetFact } from './GlassCardElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMercury} from '@fortawesome/free-solid-svg-icons'



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = (props) => {
    const [aprops, set]= useSpring(()=>({xys:[0,0,1], config:{mass:10, tension:50, friction:50}}))

    return (
        <ProductContainer
        onMouseMove={({clientX: x, clientY: y})=>(set({xys: calc(x,y)}))}
        onMouseLeave= {()=> set({xys:[0,0,1]})}
        style={{
            transform:aprops.xys.interpolate(trans)
        }}
        >
       
           
            <PlanetTitle>{props.title}</PlanetTitle>
            <FontAwesomeIcon size= "6x" style={{position:'absolute', top:"1", left:"50%",color:"#1a2c80"}} icon={props.icon} />
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
            <PlanetDescription>{props.description}</PlanetDescription>

            <PlanetImg src={props.planetImage}/>
        </ProductContainer>
    )
}

export default GlassCard
