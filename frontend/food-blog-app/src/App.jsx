import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'

const router=createBrowserRouter([
  {path:"/",element:<Home/>}
])

export default function App() {
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
