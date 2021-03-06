import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import axios from "axios"
import Image from 'react-bootstrap/Image'


function PerseveranceCarousel() {

    const [perseveranceAPIPic,setPerseveranceAPIPic]= useState("")
    
  useEffect(()=>{
        
            axios 
            .get(`https://mars-photos.herokuapp.com/api/v1/rovers/perseverance/latest_photos?api_key=
            ${process.env.REACT_APP_NASA_API_KEY}`)
    
    //    setResponded(true)
        //  .then((res)=>res.json())
         .then(res=>{
          setPerseveranceAPIPic(res.data.latest_photos);
      
       
       
         })
         .catch(error=>console.log(error))
        
        
   
  },[]);

 
  return (
    
      <>
    <Carousel>
    {[...Array(50)].map((elementInArray, index) => ( 
   
        <CarouselItem>
          
            <ul className='carouselul'>
            <h1 className='carouselTitle'>Latest Perseverance Mars Photos</h1>
            <h6 className='carouselTitle'>Brought to you by NASA Mars Photo API</h6>
               
                <li>Picture Taken by Rover {perseveranceAPIPic[1 + index]?.rover.name}</li>
                <li>Picture Taken on Sol {perseveranceAPIPic[1+index]?.sol} of mission </li>
                <li>Picture taken by the {perseveranceAPIPic[1+index]?.camera?.full_name}__
                    {perseveranceAPIPic[1+index]?.camera.name} </li>
                <li>Taken on {perseveranceAPIPic[1+index]?.earth_date}</li> 
                <li>Page {index +1}</li>
            </ul>
            <Image className='curiositySearchPicture' src={perseveranceAPIPic[1+index]?.img_src}  alt = "no data right now"/>
            
        </CarouselItem>
    ) 
)}
    </Carousel>
    </>
    
    )

}

export default PerseveranceCarousel




