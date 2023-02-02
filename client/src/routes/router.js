import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "../components/Login";
import Landing from "../components/Landing";
import FormTravel from "../components/FormTravel";
import Panel from "../components/Panel";
import Advice from "../components/Advice"
import AllProvinces from "../components/AllProvinces";
import ProtectedRoute from "../hooks/ProtectedRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Landing />
            },
            {
                path: 'form',
                element: (<ProtectedRoute><FormTravel /></ProtectedRoute>)
            },
            {
                path: 'advice',
                element: (<ProtectedRoute><Advice /></ProtectedRoute>)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'panel',
                element: <Panel />
            },
            {
                path: 'mapa',
                element: <AllProvinces />
            }
        ]
    }
])