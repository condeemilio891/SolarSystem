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
            description=" Mercury appears as a morning or evening star. 
             In Classical Greece it was called Apollo when it appeared as a morning star just before sunrise and Hermes, the Greek equivalent of the Roman god Mercury, when it appeared as an evening star just after sunset.
            Hermes was the swift messenger of the gods, and the planet’s name is thus likely a reference to its rapid motions relative to other objects in the sky."
            planetImage={Hermes}
            fact1="Temperature-Day  883°F"
            fact2="Temperature-Night  -297°F"
            fact3="  No Moons"
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