import styled from "styled-components";




export const RCard = styled.div`

    height:30rem;
    width:25rem;
    background-color:black;
    transform:scale(0.7);
    border-radius:8px;
    box-shadow: 0 0 80px 1px #4169b0;
`


export const RInfoSection = styled.div`
    width:100%;
    height:100%;
    display:flex;
    /* flex-direction:column; */
    justify-content:center;

`
export const Rdivider=styled.div `
    background-color:#949594;
    height:1.5px;
    width: 50px;
    position:absolute;
    top:190px;

`


export const RName= styled.h1`
    font-size:35px;
    font-weight:600;
    color:#f79f08;
    position:absolute;
    top:100px;
    letter-spacing: 2px;

`

export const RDate= styled.p`
font-size:25px;
color:#555555;
position:absolute;
top: 140px;
`




export const RDescription=styled.p`
    position:absolute;
    top: 220px;
    color:#949594;
    line-height:28px;
    font-size:28px;
    text-align:center;
`


export const RButton= styled.button`

position:absolute;
top:2%;
background-color:#f79f08;
border:none;
font-size:20px;
padding:13px 25px;
cursor: pointer;
color:#fff;
`

export const RPhoto= styled.img`

height:90%;
width:100%;
background-repeat: no-repeat;
position: absolute;
bottom:0;
background-size: 100% 100%;
border-radius: 8px;
transition: 1s;

/* &:hover{
    transform:scale(0.5,0.35) translateY(-650px);
    border-radius:50%;
    background-size: 100% 150%;
    background-position: 0 -25px;
} */
`



export const RPhoto2= styled.img`

height:90%;
width:100%;
background-repeat: no-repeat;
position: absolute;
bottom:0;
background-size: 100% 100%;
border-radius: 8px;
transition: 1s;
    transform:scale(0.5,0.35) translateY(-650px);
    border-radius:50%;
    background-size: 100% 150%;
    background-position: 0 -25px;

`

