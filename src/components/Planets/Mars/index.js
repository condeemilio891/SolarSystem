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
            description="This data is collected by the MAAS API. 
            The high and low today are" 
              
            planetImage={Ares}
            fact1=" Below are the high and low temperatures '(Celsius) '
            on mars according to the MAAS API"
            fact2={weatherMax}
            fact3= {weatherMin}
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