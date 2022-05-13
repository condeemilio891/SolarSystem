// import React, {useState,useEffect} from 'react'
// import Carousel, {CarouselItem} from '../components/Carousel/Carousel'
// import axios from "axios"
// import Testpic from "../assets/Images/Ares.jpg"
// import Image from 'react-bootstrap/Image'


// const TestPage = (props) => {

//       const [curiosityAPIPic,setCuriosityAPIPic]= useState('')
    

//    useEffect(()=>{
//     getMarsImages();
//   },[]);

//   const getMarsImages= () =>{
//     axios 
//       .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY`)
//       .then((res)=>{
//       setCuriosityAPIPic(res.data.latest_photos);
//       console.log(curiosityAPIPic);
//       console.log(res)
//       console.log(res.data.latest_photos[1].sol)

//       })  
//   };

  
//   return (
//       <>

//     <Carousel>
//     {[...Array(20)].map((elementInArray, index) => ( 
   
//         <CarouselItem>
//             <ul>
//                 <li>Picture Taken on Sol {curiosityAPIPic[50+index].sol} </li>
//                 <li>Picture taken by the {curiosityAPIPic[50+index].camera.full_name} 
//                     {curiosityAPIPic[50+index].camera.name} </li>
//                 <li>Taken on {curiosityAPIPic[50+index].earth_date}</li> 
//             </ul>
//             <Image src={curiosityAPIPic[50+index].img_src} height="200px"/>
            
//         </CarouselItem>
        

//     ) 
// )}
//     </Carousel>
//     </>
//   )
// }

// export default TestPage