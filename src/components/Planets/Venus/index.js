import React from "react" 
import GlassCard from "../../GlassCard"
import "./venus.css"
import { faVenus } from "@fortawesome/free-solid-svg-icons"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import Aphrodite from "../../../assets/Images/Aphrodite.webp"

class Venus extends React.Component{
    
    state ={showing:false}
  render(){
    const { showing } = this.state;
return(
    

    <>
<div class="venus">
    
    <div onClick={() => this.setState({ showing: !showing })} ></div>
 
</div>
{ showing 
                    ? <GlassCard
                    title="Venus"
            icon={faVenus}
            Xbutton={faXmarkSquare}
            description=" Venus is the brightest star in the night sky. Due to the planets luminous appearance, its name comes from 
            Venus or Aphrodite, the Goddess of love and beauty. Although the planet appears to be beautiful from afar, it is a hostile place for life. 
            The longest probe that has lasted on Venus's surface so far has been 2 hours. Unlike Mercury, which contains the most craters of any planet,
            Venus crushes anything that goes inside its strong atmosphere. Also, there is a runaway green house effect. 
            Carbon Dioxide and Sulfur retain so much heat that lead melts when it enters Venus's atmosphere. 
            Despite this, there may be life in its atmosphere due to the presense of phosphine hypothesized to be the result 
            of biological process in the atmosphere.  
              "
            planetImage={Aphrodite}
            nasaImage="https://solarsystem.nasa.gov/gltf_embed/2343"
            fact1="Longest Day in the Solar System 245 earth days 1 year on Venus is 225 days"
            fact2="Temperature 864°F Hottest Planet in the Solar System. "
            fact3= "The atmosphere is  92x stronger than Earths."
            fact4= "Earths closest Planet 22.5 million miles away and only 9% smaller."
            fact5= "Billions of years ago Venus had a similar climate to Earth."
            fact6= "Due to solar winds, temperature does not vary between night and day"/>
                    : null
                }
</>
)
  }
}


export default Venus 