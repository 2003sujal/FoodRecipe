import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function RecipeItems() {
  const allRecipes = useLoaderData()
  console.log(allRecipes)
  return (
    <>
      <div className='card-container'>
        {
          allRecipes?.map((item, index) => {
            return (
              <div key={index} className='card'>
                <img src={item?.coverImage ? `http://localhost:5000/images/${item.coverImage}` : foodImg} width="120px" height="100px" />
                <div className='card-body'>
                  <div className='title'>{item.title}</div>
                  <div className='icons'>
                    <div className='timer'><BsStopwatchFill />30min</div>
                    <FaHeart />
                    <FaEdit />
                    <MdDelete />

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}