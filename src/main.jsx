import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Home/Home'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Main/>,
    children : [
      {
        path : '/',
        element : <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='md:max-w-screen-2xl mx-auto'>
  <RouterProvider router={router}/>
 </div>
)
