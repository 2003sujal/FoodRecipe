import React from 'react'
import './App.css'
import axios from 'axios'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import ErrorPage from './pages/ErrorPage';
import AddFoodRecipe from './pages/AddFoodRecipe';

const getAllRecipes = async () => {
  try {
    const response = await axios.get('http://localhost:5000/recipe');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch recipes:', error);
    // Propagate error to React Router error handling
    throw error;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Home/>, loader: getAllRecipes },
      { path: "/myRecipe", element: <Home/> },
      { path: "/favRecipe", element: <Home/> },
      { path: "/addRecipe", element: <AddFoodRecipe/> }
    ]
  }
]);

export default function App() {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}