
import styled from "styled-components";
import CarouselSpinner from './CarouselSpinner'


export const CarouselContainer= styled.div`
 position: absolute;
  height:1000px;
  width: 1000px;
  top: 60px;
  left: calc(50% - 500px);
  display: flex;
`


export const CarouselCard= styled.div `
    display: flex;
    height: 600px;
    width: 800px;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    margin-left: -20px;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
    }
    &:hover{
        transform:translateY(-20px);
        transform: scale(1.1);
        transition:0.4s ease-out;
        position:relative;
        left:50px;
        transition:0.4s ease-out;
        position:relative;
        z-index:2;
    }
    
   &:hover ~ & {
        position: relative;
  left: 50px;
  transition: 0.4s ease-out;
    }  
  
`

export const CTitle = styled.h1`
color: white;
  font-weight: 300;
  position: absolute;
  left: 20px;
  top: 15px;
`

export const Cimg= styled.img`
height: 50%;
width:100%;
overflow:hidden;
position:relative;
top:15%;

`

export const DwarfDesc=styled.p`
color:white;
position: absolute;
top:80%;
padding-left:10px;
padding-right: 20px;
`
export const  DwarfButton = styled.button`
background-color: black;
color: white;
font-size: 20px;
padding: 10px 10px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
 &:hover{
   background: white;
   color:black;
 }
`;