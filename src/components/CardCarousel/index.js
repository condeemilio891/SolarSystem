import React from 'react'
import { CarouselContainer,CarouselCard,CTitle } from './CardElements'



const DwarfPlanetCards = () => {
  return (
   <CarouselContainer>
       <CarouselCard>
            <CTitle>Card 1</CTitle>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Card 2</CTitle>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Card 3</CTitle>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Card 4</CTitle>
       </CarouselCard>
   </CarouselContainer>
  )
}

export default DwarfPlanetCards

