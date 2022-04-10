import React from "react" 
import GlassCard from "../../GlassCard"
import "./style.css"
import { faMars} from "@fortawesome/free-solid-svg-icons"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import Ares from "../../../assets/Images/Ares.webp"


class Mars extends React.Component{
    
    state ={showing:false}
    state = {weatherMax:''}
    state ={weatherMin:''}
    
      componentDidMount(){
        fetch("https://api.maas2.jiinxt.com/"  )
        .then(res=>res.json())
        
        .then(
          (result)=>
          // console.log(result.max_temp),
          {
                  
            this.setState({
              weatherMax:result.max_temp,
              weatherMin:result.min_temp
              
            })
          }
        )
      }

  render(){
    const { showing,weatherMax,weatherMin } = this.state;
 

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
            description="Mars is the God of War
             so the planet gets its name from red the rust or iron oxide on the planet. 
             Surviving Mars will not be easy but recent discoveres say its possible.
             Humans will need water, food, oxygen and shelter from radiation to survive. 
             Water exists on Mars as Ice and flowing water. NASA
              plans to extract water from the soil.
              NASA is working on printing food using protiens, starches and fats. 
              The numberous volcano vents burrowed underneath the surface can provide shelter from radiation.
              Finally a  Mars Oxygen In-Situ Resource Utilization Experiment or MOXIE will be used to create O2"
            
              
            planetImage={Ares}
            nasaImage="https://solarsystem.nasa.gov/gltf_embed/2372"
            fact1=" Below are the high and low temperatures '(Celsius) '
            on Mars according to the MAAS API"
            fact2={weatherMax}
            fact3= {weatherMin}
            fact4= "Mars has similarities to Earth. A similar hour day, Seasons, due to the tilt,(but they are twice as long) and polar ice caps(though they are made of dry ice or CO2)"
            fact5= "Mars has two moons Phobos(fear) and Deimos(panic) named after the dogs of the God of War, Ares "
            fact6= "NASA has 2 rovers, 1 lander and 1 helicopter on Mars"/>
                    : null
                }
</>
)
  }
}


export default Mars