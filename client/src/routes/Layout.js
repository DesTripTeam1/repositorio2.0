import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavContainer, NavLogo, NavItems, NavLinks, MainContent, LogoImg } from '../styles/LayoutStyles'
import Img from '../images/logo.png'
import ScrollToTop from '../components/ScrollToTop'
import jwt_decode from 'jwt-decode'

const Layout = () => {

  const navigate = useNavigate()

  function getCurrentUser(){
    try {
      const token = localStorage.getItem('token')
      return jwt_decode(token)
    } catch (ex) {
      return null
    }
  }

  const currentUser = getCurrentUser()

  const logout = async (e) => {
    e.preventDefault()
    localStorage.removeItem('token');
    navigate('/')
  }



  return (
    <>
    <ScrollToTop />
    <MainContent>
    <NavContainer>
        <NavLogo>
            <LogoImg src={Img}></LogoImg>
        </NavLogo>
        
   <div className="center">
      <h1>
    <span>TRATRATRAVEL</span>
    <span>TRATRATRAVEL</span>
    <span>TRATRATRAVEL</span>
      </h1>
    </div>
  
        <NavItems style={{position: "relative", left: "0",
    top: "0"}}>
            <NavLinks to='/'>INICIO</NavLinks>
            <NavLinks to='/mapa'>DESTINOS</NavLinks>
            {currentUser ? <NavLinks to='form'>BUSCADOR</NavLinks> : null}
            
            {
              currentUser ? <NavLinks onClick={logout}>CERRAR SESIÓN</NavLinks> : <NavLinks to='login'>INICIAR SESIÓN</NavLinks>
            }
            

        </NavItems>
     
    </NavContainer>
    
    <Outlet currentUser={currentUser}/>
    
    </MainContent>
    
    </>
  )
}

export default Layout