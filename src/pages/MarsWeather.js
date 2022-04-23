import React from 'react'

const MarsWeather = () => {
  return (<>
    <iframe src='https://mars.nasa.gov/layout/embed/image/m20weather/'
     width='80%' left="20%" height='600' scrolling='no' frameborder='0' allowfullscreen></iframe>
    <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='800' height='530'  
    scrolling='no' frameborder='0'></iframe>
    </>
  )
}

export default MarsWeather