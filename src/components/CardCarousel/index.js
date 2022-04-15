import React from 'react'
import { CarouselContainer,CarouselCard,CTitle } from './CardElements'



const DwarfPlanetCards = () => {
  return (
   <CarouselContainer>
       <CarouselCard>
            <CTitle>Pluto</CTitle>
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

