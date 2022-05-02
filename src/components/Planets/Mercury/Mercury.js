import React from "react" 
import GlassCard from "../../GlassCard"
import "./Mercury.css"
import { faMercury } from "@fortawesome/free-solid-svg-icons"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import Hermes from "../../../assets/Images/Hermes.webp"
import {motion} from "framer-motion"
class Mercury extends React.Component{
    
    state ={showing:false}
  render(){
    const { showing } = this.state;
return(
    

    <>

    

<motion.div class="mercury"
whileHover={{
  scale: 1.2,
  transition: { duration: 1 },
}}

  
>
    
<div onClick={() => this.setState({ showing: !showing })} ></div>

</motion.div>
{ showing 
                    ? <GlassCard
                    title="Mercury"
            icon={faMercury}
            Xbutton={faXmarkSquare}
            description=" Named after the patron God of travel, merchants and messangers, Mercury, or Hermes, wore a Winged helm.
            His speed made him the messenger of the Gods. This inspired the name of the Planet
            which moves at the fastest speed in the solar system. "
            planetImage={Hermes}
            nasaImage="https://solarsystem.nasa.gov/gltf_embed/2369"
            fact1="Mercury is the fastest planet in the solar system and moves at 19 miles per second"
            fact2="Smallest planet in the solar system. You could fit 18 Mercury's in one Earth "
            fact3=" Due to the lack of atmospheric presure, one-quadrillionth of Earth’s, the temperature varies greatly
            on one side of the planet versus the other. One side can reach 427° C, 800°F and the other can
            reach -173° C or -279.4° F "
            fact4= "57,909,227 km (35,983,125 mi)from the Sun"
            fact5="Orbital Period (1 Mercurial Year)is 88 days"
            fact6= "Rotational Period (1 Earth Year) is 58.7 days"/>
                    : null
                }
</>
)
  }
}


export default Mercury 