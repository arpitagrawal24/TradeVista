import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AllRoutes } from './AllRoutes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(AllRoutes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
