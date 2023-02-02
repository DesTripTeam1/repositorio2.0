import styled from "styled-components";
import Img from '../images/airport.jpg'
import Img2 from '../images/asturias.jpg'


export const AdviceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${Img});
    background-size: cover;
    width: 100%;
    height: 100%;

    @media(max-width: 900px){
        flex-wrap: wrap;
    }
`


export const AdviceImg = styled.div`
/* @media(max-width: 900px){
       margin-top: 50px;
    } */

`

export const AdviceWidget = styled.div`
    padding: 1rem;
    margin-top: 50px;

    /* @media(max-width: 900px){
        margin-top: 150px;
    }

    @media(max-width: 580px){
       margin-top: 200px;
    }

    @media(max-width: 430px){
       margin-top: 250px;
    } */
`

export const AdviceText = styled.h2`
    color: white;
    margin-bottom: 25px;
    text-align: center;
    font-weight: 600;
    text-shadow: 2px 2px 2px black;
`

export const AdviceResponsive = styled.div`
    background-image: url(${Img2});
    background-size: cover;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
`