import styled from "styled-components";
import img from '../images/spaña2.jpg'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    background-size: 100% 100%;
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
`

export const FormTitle = styled.h1`
    font-size: 40px;
    color: white;
    text-shadow: 3px 3px 3px black;
    margin-bottom: 15px;

    @media(max-width: 540px){
        font-size: 24px;
    }
`

export const FormJson = styled.div`
    color: white;
    font-size: 18px;
    background-color: rgba(0,0,0,0.7);
    text-shadow: 2px 2px 2px black;
    width: 400px;
    padding: 2rem;
    border-radius: 10px;
`

export const FormOptions = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #286078;
    width: 400px;
    height: 300px;
    padding: 2rem;
    font-size: 22px;
    box-shadow: 2px 2px 2px 3px black;
    border-radius: 10px;
    opacity: 90%;
    text-shadow: 3px 3px 3px black;
`

export const FormInput = styled.select`
    width: 200px;
    height: 25px;
    background-color: #cacbcd;
    border-radius: 5px;
    outline: none;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
`

export const FormBtn = styled.button`
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
    transition: all 300ms ease-in-out;

    &:hover{
        background-color: #333;
        color: white;
    }
`
