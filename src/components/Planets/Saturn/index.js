import React from "react" 
import GlassCard from "../../GlassCard"
import "./style.css"
import "./saturnstyle.css"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import Zeus from "../../../assets/Images/Zeus.jpg"

class Saturn extends React.Component{
    
    state ={showing:false}
  render(){
    const { showing } = this.state;
return(
    

    <>
<div class="planet">
    
    <div onClick={() => this.setState({ showing: !showing })} >
    
    </div>
    
</div>
<div class="ring">
  
</div>
<div class="up"></div>

{ showing 
                    ? <GlassCard
                    title="Saturn"
            
            Xbutton={faXmarkSquare}
            description="Despite the distance Jupiter is the 4th brightest object in the sky.
                        Named after the Greek God Zeus or Jupiter due to its immense diameter.
                        Zeus killed his father Chronus after Chronus tried to eat him.
                        He then Punished Chronus by making him swing the scythe of time.
                        Jupiters Galilean moons '('IO, Europa, Ganymede and Callisto')' are sometimes more of interest to science today than the planet itself.
                        Ganymede is bigger than mercury and Europa may contain an ocean underneath the surface. 
                        Scientists predict that the iron core, energy source combined with a the geology of rocky mantle could
                        house could create alien life.
              "
            planetImage={Zeus}
            nasaImage="https://solarsystem.nasa.gov/gltf_embed/2375"
            fact1="Jupiter is 2.5x bigger than all the planets but 1/1,000 of the Sun"
            fact2="If Jupiter were 13x as massive it would become a Brown Dwarf"
            fact3= "79 Moons. 4 Largest: IO, Europa, Ganymede and Callisto"
            fact4= "A Day is 9 hours a year is 11.8 earth years"
            fact5= "Jupiter's Great Red Spot is a gigantic storm 2x bigger than earth and over a centery old."
            fact6= "Due to its size it pulls in Asteroids"/>
                    : null
                }
</>
)
  }
}


export default Saturn