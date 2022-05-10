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
    
      // componentDidMount(){
      //   fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000"  )
      //   .then(res=>res.json())
        
      //   .then(
      //     (result)=>
      //     console.log(result),
        //   console.log(result)
        //   {
                  
        //     this.setState({
        //       weatherMax:result.max_temp,
        //       weatherMin:result.min_temp
              
        //     })
        //   }
      //   )
      // }

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
             therefore the planet gets its name from red the rust or iron oxide on the planet.
             Although it is 1/6th the size of Earth it is likly be our first interplanetary outpost. 
             Surviving Mars will not be easy. After figuring out how to harvest energy on Mars which is still an unknown. 
             Solar is difficult because of dust storms and Mars recieves less Sun, 
             Wind is difficult because of the thin atmosphere
             Geothermal may be possible and
            there are no known deposits of natural gas. The next 
            problem is a lack of a 
            magnetism. Due to the metels in earths core, the Suns rays move to the North and South poles
            instead of hitting our planet directly. A solution to this problem could be to live underground in 
             dormant lava tubes. Flowing water has yet to be discovered but NASA
              plans to extract water from the soil. 
              NASA is working on printing food using proteins, starches and fats as material as well as growing food (which could provide O2).
              Finally a  Mars Oxygen In-Situ Resource Utilization Experiment or MOXIE will be used to create O2"
            
              
            planetImage={Ares}
            nasaImage="https://solarsystem.nasa.gov/gltf_embed/2372"
            fact1="Frozen water 
            lies beneath the surface. 
            Scientists discovered a 
            slab of ice as large as California and Texas combined in the region between 
            the equator and north pole of the Red Planet."
            fact2="Mars has the tallest volcano and largest canyon in the Solar System. They are Olympus Mons and Valles Marineris (Mariner Valley)"
            fact3= "The angle of Mars's tilt changes but over the course of thousands or millions of years"
            fact4= "Mars has similarities to Earth. A similar hour day, Seasons, due to the tilt,(but they are twice as long) and polar ice caps(though they are made of dry ice or CO2)"
            fact5= "Mars has two moons Phobos(fear) and Deimos(panic) named after the dogs of the God of War, Ares "
            fact6= "There are currently 3 functioning rovers on Mars, 1 helicoptor and 1 lander"/>
                    : null
                }
</>
)
  }
}


export default Mars