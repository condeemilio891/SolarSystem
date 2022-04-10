import React from "react" 
import GlassCard from "../../GlassCard"
import "./saturnstyle.css"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import Chronus from "../../../assets/Images/cronusPic.avif"

class Saturn extends React.Component{
    
    state ={showing:false}
  render(){
    const { showing } = this.state;
return(
    

    <>
    <div class="saturnWrap" >
    
<div class="saturn">
    
    <div onClick={() => this.setState({ showing: !showing })} >
    
    </div>
    
</div>
<div class="ring"/>
  

<div class="coverUp"></div>
</div>
{ showing 
                    ?
                    <> 
                    <GlassCard
                    title="Saturn"
            
            Xbutton={faXmarkSquare}
            description="Usually negativly portrayed for the tyrannical action of eating his children, Chronus at one point ushered a golden age for humanity.
            Humans lived long lives and on mount Olympus, Peacefully, with the Titans. 
              "
            planetImage={Chronus}
            nasaImage="https://solarsystem.nasa.gov/gltf_embed/2355"
            fact1="Saturn is less dense than water due to its hydrogen composition"
            fact2=" Saturn's north pole is the shape of a hexagon. It looks liks a storm that rotates with the planet instead of the atmosphere"
            fact3= "One day is 10 hours, one earth year is 29 years"
            fact4= "Scientists predict its outer core is liquid Hydrogen and its inner core is iron"
            fact5= "At least 82 moons. Titan is the only moon in the solar system with a thick atmosphere. It also has lakes."
            fact6= "Has rings composed of ice, asteroids and pieces of moon."/>
            </>
                    : null
                }
               
</>
)
  }
}


export default Saturn