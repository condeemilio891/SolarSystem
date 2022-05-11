import React, {useState,useEffect} from 'react'
import Carousel, {CarouselItem} from '../components/Carousel/Carousel'
import axios from "axios"
import Testpic from "../assets/Images/Ares.jpg"
import Image from 'react-bootstrap/Image'


const TestPage = (props) => {

      const [curiosityAPIPic,setCuriosityAPIPic]= useState('')

   useEffect(()=>{
    getMarsImages();
  },[]);

  const getMarsImages= () =>{
    axios 
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=100`)
      .then((res)=>{
      setCuriosityAPIPic(res.data.photos[178].img_src);
      console.log(curiosityAPIPic);
      })
      
  };
  return (
      <>
    <Carousel>
        <CarouselItem>Item 1
            <Image src={curiosityAPIPic} height="200px"/>
        </CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
    </Carousel>
    </>
  )
}

export default TestPage