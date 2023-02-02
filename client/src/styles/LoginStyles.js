import styled from "styled-components";
import img from "../images/astu.jpg"

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-size: cover;
    background-size: 100% 100%;
    background-image: url(${img});
`
export const LoginTitle = styled.h1`
    font-size: 40px;
    margin-bottom: 10px;
    color: white;
    text-shadow: 3px 3px 3px black;
`
export const LoginForm = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* border: 1mm ridge  #cacbcd; */
    box-shadow: 2px 2px 2px 3px black;
    border-radius: 10px;
    width: 30%;
    height: 50%;
    padding: 2rem;
    font-size: 18px;
    text-shadow: 3px 3px 3px black;
    background: #5d5d5d;
    opacity: 93%;

    @media(max-width: 765px){
        width: 45%;
    }

    @media(max-width: 765px){
        width: 60%;
    }
`
export const LoginInput = styled.input`
    outline: none;
    margin: 10px;
    margin-bottom: 10px;
    width: 60%;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    background-color: #cacbcd;
    font-size: 18px;
    border-radius: 5px;
`
export const LoginBtn = styled.button`
    cursor: pointer;
    font-size: 18px;
    padding: 0.6rem;
    border: none;
    border-radius: 5px;
    /* width: 120px; */
    background-color: #cacbcd;
    transition: all 300ms ease-in-out;
    box-shadow: 2px 2px 2px black;
    margin-top: 10px;
    &:hover{
        background-color: #286078;
        color: #cacbcd;
    }
`

export const LoginChange = styled.button`
    cursor: pointer;
    text-decoration: underline;
    font-size: 15px;
    background-color: #5d5d5d;
    color: white;
    border: none;
    margin-top: 10px;
    font-family: 'Source Sans Pro', sans-serif;
`