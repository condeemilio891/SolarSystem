import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel'
import axios from "axios"
import Image from 'react-bootstrap/Image'


const CuriosityCarousel = () => {

      const [curiosityAPIPic,setCuriosityAPIPic]= useState('')
    
        const [responded,setResponded]=useState(false)

const fetchMarsAPIData= ()=>{
      axios 
      .get(`https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY`)
     
      .then((res)=>{
        setCuriosityAPIPic(res.data.latest_photos);
      console.log(curiosityAPIPic);
      localStorage.setItem('APIMARSDATA','yoyo')
       })
       
       .catch(error=> console.error(`Error:${error} `));
      

}
  useEffect(()=>{

 
      const getMarsAPIData=async()=>{
    await fetchMarsAPIData()};

        getMarsAPIData();
      
    //   return()=>{
    //     //   this now gets called when the comp unmounts
    //   }
   
  },[]);

  if(curiosityAPIPic!=''){
  return (
     
      <>

    
    <Carousel>
    {[...Array(20)].map((elementInArray, index) => ( 
   
        <CarouselItem>
            <ul>
                <li>Picture Taken on Sol {curiosityAPIPic[50+index].sol} </li>
                <li>Picture taken by the {curiosityAPIPic[50+index].camera.full_name} 
                    {curiosityAPIPic[50+index].camera.name} </li>
                <li>Taken on {curiosityAPIPic[50+index].earth_date}</li> 
            </ul>
            <Image src={curiosityAPIPic[50+index].img_src} height="200px"/>
            
        </CarouselItem>
        
        

    ) 
)}
    </Carousel>
    
   

    </>
  )
    } else {
        return(

            <Carousel>
                <CarouselItem>Loading please Wait</CarouselItem>
            </Carousel>
        )
    }
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