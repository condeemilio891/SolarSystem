
import axios from 'axios'
import React, {useState,useEffect} from 'react'
import Carousel, { CarouselItem } from './Carousel'
import Image from 'react-bootstrap/esm/Image'
import { Form } from 'semantic-ui-react'
import './Carousel.css'




const MarsPhotoSearch = () => {

    const [search,setSearch]=useState('333')
    const [loading,setLoading]=useState(false)
    const [curiosityPictureData,setCuriosityPictureData]=useState('')
    const [roverApi, setRoverApi]=useState('curiosity')
    
    

        const getMarsPics=()=>{
            setLoading(true);
               
        axios 
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverApi}/photos?api_key=${process.env.REACT_APP_NASA_API_KEY}&sol=${search}`)
    
    
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
      <Form.Group inline>
    <label>Choose Rover</label>
    <Form.Radio label="Curiosity" checked={roverApi === 'curiosity'} value="curiosity" onClick={() => setRoverApi('curiosity')} />
    <Form.Radio label="Perseverance" checked={roverApi === 'perseverance'} value="perseverance" onClick={() => setRoverApi('perseverance')}/>
    <Form.Radio label="Opportunity" checked={roverApi === 'opportunity'} value="opportunity" onClick={() => setRoverApi('opportunity')}/>
</Form.Group><Form.Radio label="Spirit" checked={roverApi === 'spirit'} value="spirit" onClick={() => setRoverApi('spirit')}/>
   <ul className='carouselul'>
      <h1 className='carouselTitle'>{curiosityPictureData[1 + index]?.rover.name} Pictures</h1>
      <h5 className='carouselTitle' >Taken on sol <span className='carouselSolResult'>{curiosityPictureData[1+index]?.sol}</span></h5>
      <h6 className='carouselTitle' > Brought to you by NASA Mars Photo API </h6>
         
          <li>Picture Taken by Rover {curiosityPictureData[1 + index]?.rover.name}</li>
          <li>Picture taken by the {curiosityPictureData[1+index]?.camera?.full_name}__
              {curiosityPictureData[1+index]?.camera.name} </li>
          <li>Taken on {curiosityPictureData[1+index]?.earth_date}</li> 
      </ul>
      <Image className='curiositySearchPicture' src={curiosityPictureData[1+index]?.img_src} alt="No Data This Sol, Try another one"/>

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

