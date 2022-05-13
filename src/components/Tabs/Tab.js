import React, {useState} from 'react'
import "./style.css"



function Tabs(){

        const[ toggleTab,setToggleTab]= useState(1)

        const toggle=(index)=>{
                setToggleTab(index)
        }
    return(
  <div className ="tabsContainer">
      <div className='bloc-tabs'>
        <div className={toggleTab ===1 ?'tabs active-tabs':"tabs"}
        onClick={()=>toggle(1)}
        >Ingenuity Rover</div>
        <div className={toggleTab ===2 ?'tabs active-tabs':"tabs"}
         onClick={()=>toggle(2)}>
        Curiosity Rover</div>
        <div className={toggleTab ===3 ?'tabs active-tabs':"tabs"}
         onClick={()=>toggle(3)}
         >InSight Lander</div>
      </div>


    <div className='content-tabs'>
        <div className={toggleTab===1?'content active-content':'content'}>
            
            <hr/>
            <iframe className="nasaIframe" src='https://mars.nasa.gov/layout/embed/image/m20weather/'
             scrolling='no' frameborder='0' allowfullscreen height="300rem" width="300rem"
            ></iframe>
        </div>
        <div className={toggleTab===2 ?'content active-content':'content'} >
            <iframe className="nasaIframe" src='https://mars.nasa.gov/layout/embed/image/mslweather/'   
            scrolling='no' frameborder='0'></iframe>
         
        </div>
        <div className={toggleTab===3 ?'content active-content':'content'}>
          
            <iframe className="nasaIframe" src='https://mars.nasa.gov/layout/embed/image/insightweather/'  
            scrolling='no' frameborder='0'></iframe>
        </div>
    </div>
  </div>
    )}

    export default Tabs 