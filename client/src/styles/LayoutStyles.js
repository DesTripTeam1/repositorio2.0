import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const NavContainer = styled.div`
    background-color: #333;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'Source Sans Pro', sans-serif;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);

`
export const NavLogo = styled.h1`
    font-size: 24px;
`
export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;

    padding: 0.5rem;
    
`
export const NavLinks = styled(NavLink)`
    font-size: 18px;
    color: #CACBCD;
    text-decoration: none;
    padding: 0.5rem;
  

    &:hover{
        border-bottom: 2px solid #286078; 
    }

    

    @media(max-width: 540px){
        font-size: 12px;
    }
`

export const MainContent = styled.div`
    height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;

`

export const LogoImg = styled.img`
    width: 100%;
    height: 80px;
    margin-top: 5px;
`