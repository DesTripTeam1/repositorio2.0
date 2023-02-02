import { Navigate } from "react-router-dom"
import jwt_decode from 'jwt-decode'



const ProtectedRoute = ({children}) => {
  
  function getCurrentUser(){
    try {
      const token = localStorage.getItem('token')
      return jwt_decode(token)
    } catch (ex) {
      return null
    }
  }

  const currentUser = getCurrentUser()


  return (
    
    currentUser  ? children : <Navigate to="/login" replace />
  );
}

export default ProtectedRoute
