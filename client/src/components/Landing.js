import "../styles/Landing.css";
import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {WelcomeImg, WelcomeGreet, WelcomeAbout, WelcomeTitle, AboutTitle, AboutP, AboutBtn} from "../styles/LandingStyles";
import jwt_decode from 'jwt-decode'

const Landing = () => {

  useEffect( () => {
      const getUsers = async () => {
        const startDb = await fetch("https://travel-db-wy62.onrender.com/users")
        const data = await startDb.json()
 
      }
      getUsers()
  }, [])

  function getCurrentUser(){
    try {
      const token = localStorage.getItem('token')
      return jwt_decode(token)
    } catch (ex) {
      return null
    }
  }

  const currentUser = getCurrentUser()

  

  const navigate = useNavigate()

  const start = () => {
    navigate('login')
  }
  return (
    <>

   <WelcomeImg >
   <WelcomeTitle>
    TE DAMOS <br></br> LA BIENVENIDA <br></br>A TRATRATRAVEL
    </WelcomeTitle>
   </WelcomeImg>

   <WelcomeAbout > 
    <AboutTitle >
    ¿Qué es<br></br> Tra <br></br>Tra<br></br> Travel?
    </AboutTitle>
    <AboutP>
    Tratratravel utiliza inteligencia artificial para recomendar los mejores destinos para cada cliente, basándonos en sus deseos y preferencias. Las nuevas tecnologías están a nuestro servicio para ofrecernos las mejores experiencias.
    </AboutP>
  </WelcomeAbout>

  <WelcomeGreet> 
  <AboutTitle >
    ¿Qué es<br></br> Tra <br></br>Tra<br></br> Travel?
    </AboutTitle>
    <AboutP>
    ¿Quieres comenzar a usar Tratratravel? Regístrate ahora para tener una experiencia de usuario totalmente personalizada.
    
    {currentUser ? <AboutBtn disabled>COMIENZA YA</AboutBtn> : <AboutBtn onClick={start}>COMIENZA YA</AboutBtn>}
    
    </AboutP>
    
  </WelcomeGreet>

 </>
  )
}

export default Landing