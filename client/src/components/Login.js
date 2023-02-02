import React, { useState } from 'react'
import { LoginContainer, LoginForm, LoginInput, LoginBtn, LoginTitle, LoginChange } from '../styles/LoginStyles'
import {useNavigate} from 'react-router-dom'
import UserConsumer from '../hooks/useDatos'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [registerMode, setRegisterMode] = useState(false)
    const [error, setError] = useState(null)
    
    const [user, dispatch] = UserConsumer()

    const navigate = useNavigate()

    const processChange = e => {
      e.preventDefault()
      setRegisterMode(!registerMode)
    }

    const processRegister = async (e) => {
      e.preventDefault()
      
      const newUser = {
        username,
        email,
        password
      }

      try {
        const response = await axios.post("https://travel-db-wy62.onrender.com/users/", newUser)
        const token = response.headers["x-auth-token"]
        localStorage.setItem('token', token)
        navigate('/form')
      } catch (error) {
  
        if(error.response.data === "\"email\" is not allowed to be empty"){
          setError("Introduce un email")
        } else if (error.response.data === "\"password\" is not allowed to be empty"){
          setError("Introduce una contrseña")
        } else if (error.response.data === '"email" must be a valid email'){
          setError("Formato de email no válido")
        } else if (error.response.data === "\"username\" is not allowed to be empty"){
          setError("Introduce un nombre de usuario")
        } else if (error.response.data === "El usuario ya está registrado"){
          setError("El usuario ya está registrado")
        } else if (error.response.data === 'User already exists'){
          setError("El usuario ya está registrado")
        }
      }
    }

    const processLogin = async (e) => {
      e.preventDefault()
      const loggedUser = {
        email,
        password
      }

      try {
     
        const response = await axios.post("https://travel-db-wy62.onrender.com/auth", loggedUser)
        const token = response.headers["x-auth-token"]
        localStorage.setItem('token', token)
      
        dispatch({type: 'login'})
        navigate('/')
      } catch (error) {
      
        if(error.response.data === "\"email\" is not allowed to be empty"){
          setError("Introduce un email")
        } else if (error.response.data === "\"password\" is not allowed to be empty"){
          setError("Introduce una contrseña")
        } else if (error.response.data === '"email" must be a valid email'){
          setError("Formato de email no válido")
        } else if (error.response.data === "Email y password invalidos"){
          setError("Email o contraseña incorrectos")
        }
      }
    }

  return (
    <LoginContainer>
      
      
      <LoginTitle> {registerMode ? 'REGÍSTRATE' : 'LOG IN'}</LoginTitle>
      <LoginForm>
        <>
        {registerMode ? (
            <>
            NOMBRE DE USUARIO<LoginInput
             onChange={e => setUsername(e.target.value)}
             value={username}
             type="text" 
            ></LoginInput>

            EMAIL<LoginInput
             onChange={e => setEmail(e.target.value)}
             value={email}
             type="email" 
            ></LoginInput>
            
            
            CONTRASEÑA<LoginInput
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password" 
            ></LoginInput>
            
            </>
            ) : (<>EMAIL<LoginInput
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="email" 
             ></LoginInput>
 
             CONTRASEÑA<LoginInput 
             onChange={e => setPassword(e.target.value)}
             value={password}
             type="password" 
             ></LoginInput>

             
             </>)}
             {error && <div style={{backgroundColor: '#d62433', padding: "0.5rem", borderRadius: "5px"}}>{error}</div>}
        <LoginBtn onClick={registerMode ? processRegister : processLogin}>{registerMode ? 'REGÍSTRATE' : 'LOG IN'}</LoginBtn>
        <LoginChange onClick={processChange}>{registerMode ? '¿Ya tienes cuenta?': '¿No estás registrado?'}</LoginChange>
        </>
      </LoginForm>
      
     
    </LoginContainer>
  )
}

export default Login

