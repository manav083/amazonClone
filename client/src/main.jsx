import React from 'react'
import ReactDOM from 'react-dom/client'
import element from '.'
import { RouterProvider } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={element}/>
)
