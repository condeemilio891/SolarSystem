import React from 'react'
import { CarouselContainer,CarouselCard,CTitle, Cimg,DwarfDesc,DwarfButton } from './CardElements'
import PlutoB from "../../assets/Images/plutoback.jpg"


const DwarfPlanetCards = () => {
  return (
   <CarouselContainer>
       <CarouselCard>
            <CTitle>Pluto</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2357' width='100%' height='450px' frameborder='0' />
            <DwarfDesc>Although Pluto has 5 known moons. It is smaller than our moon.</DwarfDesc>
            <DwarfButton>More Info</DwarfButton>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Eres</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2390' width='100%' height='450px' frameborder='0' />
            <DwarfDesc> 558 year orbit and 68 AU's from the Sun. For reference Neptune 30 AU's. </DwarfDesc>
            <DwarfButton>More Info</DwarfButton>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Ceres</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2400' width='100%' height='450px' frameborder='0' />
          <DwarfDesc>Largest object located in the asteroid belt</DwarfDesc>
          <DwarfButton>More Info</DwarfButton>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Makemake</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2374' width='100%' height='450px' frameborder='0' />
               <DwarfDesc>discovered at Palomar Observatory in 2005 and named after the Rapanui god of fertility</DwarfDesc>
               <DwarfButton>More Info</DwarfButton>
       </CarouselCard>
       <CarouselCard>
            <CTitle>Haumea</CTitle>
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2384' width='100%' height='450px' frameborder='0' />
            <DwarfDesc>Its rapid 3 hour day may be what gives it its egg shape</DwarfDesc>
            <DwarfButton>More Info</DwarfButton>
       </CarouselCard>
   </CarouselContainer>
  )
}

export default DwarfPlanetCards

