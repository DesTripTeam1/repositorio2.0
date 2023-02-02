import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {router} from './routes/router'
import { RouterProvider } from 'react-router-dom';
import { DatosProvider } from "./hooks/useDatos";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DatosProvider>
    <RouterProvider router={router} />
    </DatosProvider>
  </React.StrictMode>
);
