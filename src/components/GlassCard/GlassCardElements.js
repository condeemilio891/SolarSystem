import styled from "styled-components"
import { animated} from "react-spring"


export const ProductContainer= styled(animated.div)`
   position:absolute;
  display: flex;
  min-height:80%;
  max-height:80rem;
  width:50%;
  padding: 9.5em;
  background: #C7D2FE66;
  border-radius: 10px;
  z-index: 1 !important;
 flex-wrap: wrap;
  backdrop-filter: opacity(20%);
  border: 2px solid transparent;
  background-clip:border-box;
  cursor:default;
  margin-right:10px;
  margin-left:10px;
  margin-bottom: 15px;
  margin-top:8em;
   opacity: ${({isOpen})=>(isOpen ? '100%' :'0')};
    /* if is open is true show if not hide */
    top:${({isOpen})=>(isOpen? '0':'-1000%')};
    display:${({isOpen})=>(isOpen? 'inline-block':'none')};
    z-index:${({isOpen})=>(isOpen? 1 : 0)} ;

  
@media screen and (max-width: 900px){
   padding:1rem;
   /* align-items: flex-start;
   justify-content: left; */
   display:flex;
   flex-wrap:wrap;

   width:100%;
   height:80rem !important;
};
`




export const PlanetTitle = styled.h1`
    line-height: .5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    position:absolute;
    top:1rem;
    left:5rem;
    font-size:3.3rem;
    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
    font-weight:bold;
    color:#da8a8b;


`

export const PlanetDescriptionDiv= styled.div`
   height: auto;
   width: auto;
   
`

export const PlanetDescription = styled.h3`
    line-height: 1.3;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
    position: absolute;
    left:45%;
    color: white;

    @media screen and (max-width: 900px){
      line-height:1.7 ;
      font-size:15px;
      top:50%;
      left:5%;
      padding-right:20%;
      padding-top:1rem;
     

    }

`

export const PlanetImg = styled.img`
        width: 8rem;
        height: 10rem;
        border: 3px solid #000;
        border-radius: 50%;
        position:absolute;
        top:0;
        right:2rem;
        &:hover{
           transform:scale(1.2)
        }
        @media (max-width:900px){
           top:40%;
           left:10%;
           
        }
    
    `
    export const ListGroupBody= styled.body `

    margin: 0;
    padding:0;
    font-family: sans-serif;
    position: absolute;
    top: 0rem;
    left: 4.5rem;
    width:20rem;
    height:10rem;
    background:none;

  
    `
    
    export const ListGroup = styled.ul` 
    
    position: relative;
    width: 100%;
    margin: 100px auto 0;
    padding: 10px;
    box-sizing: border-box;
 
    `
    
    export const ListGroupItem=styled.li` 
    display: flex;
   
    background: rgba(255,255,255,.1);
    padding: 10px 20px;
    color: #fff;
    margin: 5px 0;
    transition: .5s;
    &:nth-child(1) {
          background: #081448;
       };
       &:nth-child(2) {
          background: #282157;
       };
       &:nth-child(3) {
          background: #081448;
       };
       &:nth-child(4) {
          background: #282157;
       };
       &:nth-child(5) {
          background: #081448;
       };
       &:nth-child(6) {
          background:#282157;
       };
       &:nth-child(7) {
          background:  #D7C0AD;
       };
       &:nth-child(8) {
          background: #C0AA8D;
       };
       &:nth-child(9) {
          background: #D7C0AD;
       };
       &:hover{
           transform: scale(1.06);
           background: #fff0f3;
           color:black;
       }
    `