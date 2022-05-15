import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import axios from "axios"
import Image from 'react-bootstrap/Image'



function CuriosityCarousel() {

      const [curiosityAPIPic,setCuriosityAPIPic]= useState("")


    

  useEffect(()=>{
    
    console.log(process.env.REACT_APP_NASA_API_KEY)
        
            axios 
            .get(`https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos?api_key=
            ${process.env.REACT_APP_NASA_API_KEY}`)
    
    //    setResponded(true)
        //  .then((res)=>res.json())
         .then(res=>{
          setCuriosityAPIPic(res.data.latest_photos);
        

       
         })
         .catch(error=>console.log(error))
        
        
   
  },[]);

 
  return (
    
      <>
    <Carousel>
    {[...Array(50)].map((elementInArray, index) => ( 
   
        <CarouselItem>
          
            <ul className="carouselul">
            <h1 className='carouselTitle'>Latest Curiosity Rover Mars Photos</h1>
            <h6 className='carouselTitle'>Brought to you by NASA Mars Photo API</h6>
                <li>Latest Picture on the rover {curiosityAPIPic[1 + index]?.rover.name}</li>
                <li>Picture Taken on Sol {curiosityAPIPic[1+index]?.sol} of mission </li>
                <li>Picture taken by the {curiosityAPIPic[1+index]?.camera?.full_name}__
                    {curiosityAPIPic[1+index]?.camera.name} </li>
                <li>Taken on {curiosityAPIPic[1+index]?.earth_date}</li> 
                <li>Page {index +1}</li>
            </ul>
            <Image className='carouselImage' src={curiosityAPIPic[1+index]?.img_src} height="200px" alt="No data right now"/>
            
        </CarouselItem>
    ) 
)}
    </Carousel>
    </>
    
    )

}

export default CuriosityCarousel






// below is a loader for tinker with later

// {/* <Carousel>
// {[...Array(20)].map((elementInArray, index) => ( 

//     <CarouselItem>
//         <ul>
//             <li>Loading </li>
//             <li>Loading </li>
//             <li>Loading</li> 
//         </ul>
//         {/* <Image src={curiosityAPIPic[50+index].img_src} height="200px"/> */}
        
//     </CarouselItem>
    
    

// ) 
// )}
// </Carousel> */}