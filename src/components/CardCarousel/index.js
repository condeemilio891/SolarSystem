import React from 'react'
import { CarouselContainer,CarouselCard,CTitle, Cimg } from './CardElements'
import PlutoB from "../../assets/Images/plutoback.jpg"


const DwarfPlanetCards = () => {
  return (
   <CarouselContainer>
       <CarouselCard>
            <CTitle>Pluto</CTitle>
            <Cimg src={PlutoB}/>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Eres</CTitle>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Ceres</CTitle>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Makemake</CTitle>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Haumea</CTitle>
       </CarouselCard>
   </CarouselContainer>
  )
}

export default DwarfPlanetCards

