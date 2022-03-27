import React from "react" 
import GlassCard from "../../GlassCard"
import "./style.css"
import { faJupiter } from "@fortawesome/free-solid-svg-icons"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import Gaia from "../../../assets/Images/Gaia.jpg"

class Jupiter extends React.Component{
    
    state ={showing:false}
  render(){
    const { showing } = this.state;
return(
    

    <>
<div class="jupiter">
    
    <div onClick={() => this.setState({ showing: !showing })} ></div>
 
</div>
{ showing 
                    ? <GlassCard
                    title="Jupiter"
            
            Xbutton={faXmarkSquare}
            description=" Gaia (Terra) personified the earth. She Had Three types of children with Uranus, the personification of the sky.
            12 Titans, 3 Cyclops and 3 Hecatoncheires (hundred handed). Uranus hated his children. His son, Chronus, a Titan, resented this and slashed him with a sickle.
            The blood from Uranus fell on Mother Earth Creating the Giants, the Fates and the Tree Nymphs. Chronus Fearing his son would usurp him ate his children. 
            Mother Earth saw this and adviced Rhea, Chronus's wife, to feed him a rock and hide Zeus. Chronus's Fears came true and Zeus became the ruler of living things.
              "
            planetImage={Gaia}
            fact1="Surface is 71% covered by water"
            fact2="The Earths magnetic field forms a magnetosphere which protects us from the solar wind"
            fact3= "The temperature of the inner core of the earth is similar to the sun but the immense presure keeps it solid"
            fact4= "the temperature difference within the outer core causes convection currents. Powering Earth's magnetic Field"
            fact5= "Largest and densest Terrestrial planet"
            fact6= "Tilted on it's axis by 24.3° Causing Seasons"/>
                    : null
                }
</>
)
  }
}


export default Jupiter