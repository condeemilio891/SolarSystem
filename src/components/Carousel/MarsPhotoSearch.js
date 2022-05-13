import react from 'react'
import axios from 'axios'


useEffect(()=>{
    
    
        
    axios 
    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000`)

//    setResponded(true)
//  .then((res)=>res.json())
 .then(res=>{
  setCuriosityAPIPic(res.data.latest_photos);

console.log(curiosityAPIPic);

 })
 .catch(error=>console.log(error))



},[]);