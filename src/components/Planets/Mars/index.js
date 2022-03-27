import React from "react" 
import GlassCard from "../../GlassCard"
import "./style.css"
import { faMars} from "@fortawesome/free-solid-svg-icons"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import Ares from "../../../assets/Images/Ares.webp"


class Mars extends React.Component{
    
    state ={showing:false}
  render(){
    const { showing } = this.state;
return(
    

    <>
<div class="mars">
    
    <div onClick={() => this.setState({ showing: !showing })} ></div>
 
</div>
{ showing 
                    ? <GlassCard
                    title="Mars"
            icon={faMars}
            Xbutton={faXmarkSquare}
            description=" Gaia (Terra) personified the earth. She Had Three types of children with Uranus, the personification of the sky.
            12 Titans, 3 Cyclops and 3 Hecatoncheires (hundred handed). Uranus hated his children. His son, Chronus, a Titan, resented this and slashed him with a sickle.
            The blood from Uranus fell on Mother Earth Creating the Giants, the Fates and the Tree Nymphs. Chronus Fearing his son would usurp him ate his children. 
            Mother Earth saw this and adviced Rhea, Chronus's wife, to feed him a rock and hide Zeus. Chronus's Fears came true and Zeus became the ruler of living things.
              "
            planetImage={Ares}
            fact1="Surface is Covered by Iron Oxide"
            fact2="Summer Temperature is 63°F while Winter is -220°F"
            fact3= "Has 2 moons: Phobos and Diemos"
            fact4= "The biggest crater on Mars is Borealis Basin. It is 5300 miles from end to end and covers 40% of planet’s surface."
            fact5= "Polar Caps made of dry ice (frozen CO2)"
            fact6= "A day on Mars lasts 24 hours and 37 minutes."/>
                    : null
                }
</>
)
  }
}


export default Mars