
import axios from 'axios'
import React, {useState,useEffect} from 'react'
import Carousel, { CarouselItem } from './Carousel'
import Image from 'react-bootstrap/esm/Image'
import './Carousel.css'




const MarsPhotoSearch = () => {

    const [search,setSearch]=useState('40')
    const [loading,setLoading]=useState(false)
    const [curiosityPictureData,setCuriosityPictureData]=useState('')
    
    

        const getMarsPics=()=>{
            setLoading(true);
               
        axios 
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${process.env.REACT_APP_NASA_API_KEY}&sol=${search}`)
    
    
     .then(res=>{
      setCuriosityPictureData(res.data.photos);
      setLoading(false)
    
    console.log(res);
    
     })
     .catch(error => {
        setLoading(false);
        console.log("error", error);
      });
        }


    useEffect(()=>{
     
        getMarsPics();
    
    },[search]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.target.blur(); 
        }
      }
  return (
    <>
    {loading ? <p>loading</p> : <Carousel>

{[...Array(50)].map((elementInArray, index) => ( 

   <CarouselItem>

   <ul className='carouselul'>
      <h1 className='carouselTitle'>Curiosity Pictures</h1>
      <h5 className='carouselTitle'>Taken on sol {curiosityPictureData[1+index]?.sol}</h5>
      <h6 className='carouselTitle' > Brought to you by NASA Mars Photo API </h6>
         
          <li>Picture Taken by Rover {curiosityPictureData[1 + index]?.rover.name}</li>
          <li>Picture taken by the {curiosityPictureData[1+index]?.camera?.full_name}__
              {curiosityPictureData[1+index]?.camera.name} </li>
          <li>Taken on {curiosityPictureData[1+index]?.earth_date}</li> 
      </ul>
      <Image src={curiosityPictureData[1+index]?.img_src} alt="No Data This Sol, Try another one" height="200px"/>

   </CarouselItem>

) 
)}
</Carousel>}

     <div className="curiosityInput">
        <input
          className="curiositySearchForm"
          type="text"
        
          onBlur={e => setSearch(e.target.value)}
          onKeyDown={(event) =>handleKeyDown(event)}
        //   onChange={e => setSearch(e.target.value)}
          placeholder="use numerical values please"
        />

        <button className="curiositySearchBtn"  onClick={getMarsPics}>Search</button>
      </div>
    </>
  )
}

export default MarsPhotoSearch

