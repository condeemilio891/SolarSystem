
import styled from "styled-components";


export const CarouselContainer= styled.div`
 position: absolute;
  height:1000px;
  width: 1000px;
  top: 60px;
  left: calc(50% - 500px);
  display: flex;
`


export const CarouselCard= styled.div`
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
    
   &:hover ~& {
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
