import React from "react" 
import GlassCard from "../../GlassCard"
import "./style.css"
import { faEarth } from "@fortawesome/free-solid-svg-icons"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import Gaia from "../../../assets/Images/Gaia.jpg"
import SelectSound from "../../../assets/Music/SelectSciFiBeep.wav"

class Earth extends React.Component{
    
    state ={showing:false,
            }

      sound=new Audio(SelectSound)

      toggleSound=()=>{
        this.sound.play();
        
      }

  render(){
    const { showing } = this.state;
return(
    

    <>
<div class="earth">
    
    <div onClick={() => this.setState({ showing: !showing })} 
          onMouseEnter={this.toggleSound}></div>

</div>
{ showing 
                    ?
                    <>
                    <GlassCard
                    title="Earth"
            icon={faEarth}
            Xbutton={faXmarkSquare}
            description=" Gaia (Terra) personified the earth. She Had Three types of children with Uranus, the personification of the sky.
            12 Titans, 3 Cyclops and 3 Hecatoncheires (hundred handed). Uranus hated his children. His son, Chronus, a Titan, resented this and slashed him with a sickle.
            The blood from Uranus fell on Mother Earth Creating the Giants, the Fates and the Tree Nymphs. Chronus Fearing his son would usurp him ate his children. 
            Mother Earth saw this and adviced Rhea, Chronus's wife, to feed him a rock and hide Zeus. Chronus's Fears came true and Zeus became the ruler of living things.
              "
            nasaImage="https://solarsystem.nasa.gov/gltf_embed/2393"
            planetImage={Gaia}
            fact1="71% covered by water"
            fact2="The Earths magnetic field forms a magnetosphere which protects us from the solar wind."
            fact3= "The temperature of the inner core of the earth is similar to the sun but the immense presure keeps it solid"
            fact4= "the temperature difference within the outer core causes convection currents. Powering Earth's magnetic Field"
            fact5= "Largest and densest Terrestrial planet"
            fact6= "Tilted on it's axis by 24.3??"/> 

       

       
            </>
                    : null
                
                }
</>
)
  }
}


export default Earth