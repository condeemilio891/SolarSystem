import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import axios from "axios"
import Image from 'react-bootstrap/Image'


function PerseveranceCarousel() {

    const [perseveranceAPIPic,setPerseveranceAPIPic]= useState("")
    
     


    

  useEffect(()=>{
    
    
        
            axios 
            .get(`https://mars-photos.herokuapp.com/api/v1/rovers/perseverance/latest_photos?api_key=
            4PRLKGVWcZiAclImDlk76LPTX9aKDSWwycCnhwLo`)
    
    //    setResponded(true)
        //  .then((res)=>res.json())
         .then(res=>{
          setPerseveranceAPIPic(res.data.latest_photos);
      
        console.log(perseveranceAPIPic);
       
         })
         .catch(error=>console.log(error))
        
        
   
  },[]);

 
  return (
    
      <>
    <Carousel>
    {[...Array(20)].map((elementInArray, index) => ( 
   
        <CarouselItem>
          
            <ul>
            <h1>Latest Rover Mars Photos</h1>
            <h6>Brought to you by NASA Mars Photo API</h6>
               
                <li>Picture Taken by Rover {perseveranceAPIPic[1 + index]?.rover.name}</li>
                <li>Picture Taken on Sol {perseveranceAPIPic[1+index]?.sol} of mission </li>
                <li>Picture taken by the {perseveranceAPIPic[1+index]?.camera?.full_name}__
                    {perseveranceAPIPic[1+index]?.camera.name} </li>
                <li>Taken on {perseveranceAPIPic[1+index]?.earth_date}</li> 
                <li>Page {index +1}</li>
            </ul>
            <Image src={perseveranceAPIPic[1+index]?.img_src} height="200px"/>
            
        </CarouselItem>
    ) 
)}
    </Carousel>
    </>
    
    )

}

export default PerseveranceCarousel




