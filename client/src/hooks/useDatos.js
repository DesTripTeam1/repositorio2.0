import { useState, useContext, createContext, useReducer } from "react";


const initialState = {isAuth: false}
const UserContext = createContext(initialState);

UserContext.displayName = "UserContext";

export function reducer(state, action){
  switch(action.type){
    case "login":
      return {isAuth: true}
      default:
        throw new Error();
  }
}

export function DatosProvider({ children }) {
  const [saveResultFinal, setSaveResultFinal] = useState("")
  const [auth, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={[saveResultFinal, setSaveResultFinal, auth, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}

export default function UserConsumer() {
  return useContext(UserContext);
}