import styled from "styled-components";
import Img from '../images/plane-welcome.jpg'
import Img2 from '../images/alhambra.jpg'
import Img3 from '../images/tourist.jpg'

export const WelcomeImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${Img});
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center ;
    
`
export const WelcomeGreet = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Img2});
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`
export const WelcomeAbout = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Img3});
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    
`

export const WelcomeTitle = styled.h1`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 200px;
    justify-content: center;
    font-family:    Arial, Helvetica, sans-serif;
    font-size:      60px;
    text-shadow: 4px 0 #000, -2px 0 #ccc, 0 2px #ccc, 0 -5px #000,
    1px 1px #ccc, -1px -7px #ccc, 1px -1px #ccc, -1px 1px #000;

    @media(max-width: 715px){
        font-size: 45px;
    }

    @media(max-width: 400px){
        font-size: 32px;
    }

    
`
export const AboutTitle = styled.h2`
    color: white;
    display: relative;
    justify-content: space-between;
    padding-top: 1rem;
    padding-left: 60px;
    font-family:    Arial, Helvetica, sans-serif;
    font-size:      60px;
    text-shadow: 4px 0 #000, -2px 0 #ccc, 0 2px #ccc, 0 -5px #000,
    1px 1px #ccc, -1px -7px #ccc, 1px -1px #ccc, -1px 1px #000;
    max-width: 100%;

    @media(max-width: 643px){
        display: none;
    }
`

export const AboutP = styled.p`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 30%;
    padding: 1.3rem;
    margin: 50px;
    margin-left: 200px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-shadow: 3px 3px 1px black;
    border-radius: 20px; 
    background-color: rgba(135, 135, 135,0.1);

    @media(max-width: 1000px){
        font-size: 20px;
    }

    @media(max-width: 765px){
        font-size: 15px;
    }

    @media(max-width: 643px){
        font-size: 15px;
        background: none;
        margin-left: 30px;
    }
    

    @media(max-width: 545px){
        margin-left: 20px;
    }

    @media(max-width: 501px){
        background: none;
    }
  
`

export const AboutBtn = styled.button`
    cursor: pointer;
    width: 150px;
    margin-right: 50px;
    margin-top: 20px;
    padding: 0.3rem;
    background-color: white;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    transition: all 300ms ease-in-out;

    &:hover{
        background-color: #333;
        color: white;
    }
`