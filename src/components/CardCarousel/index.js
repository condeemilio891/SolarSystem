import React from 'react'
import { CarouselContainer,CarouselCard,CTitle, Cimg,DwarfDesc } from './CardElements'
import PlutoB from "../../assets/Images/plutoback.jpg"


const DwarfPlanetCards = () => {
  return (
   <CarouselContainer>
       <CarouselCard>
            <CTitle>Pluto</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2357' width='100%' height='450px' frameborder='0' />
            <DwarfDesc>Although Pluto has 5 known moons. It is smaller than our moon.</DwarfDesc>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Eres</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2390' width='100%' height='450px' frameborder='0' />
            <DwarfDesc> 558 year orbit and 68 AU's away. For reference Neptune is 30 AU's. </DwarfDesc>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Ceres</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2400' width='100%' height='450px' frameborder='0' />
       </CarouselCard>
       <CarouselCard>
            <CTitle>Makemake</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2374' width='100%' height='450px' frameborder='0' />
       </CarouselCard>
       <CarouselCard>
            <CTitle>Haumea</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2384' width='100%' height='450px' frameborder='0' />
       </CarouselCard>
   </CarouselContainer>
  )
}

export default DwarfPlanetCards

