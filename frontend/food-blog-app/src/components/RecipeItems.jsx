import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate, useLocation } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

export default function RecipeItems() {
    const recipes = useLoaderData()
    const [allRecipes, setAllRecipes] = useState()
    const location = useLocation()
    const [favItems, setFavItems] = useState(JSON.parse(localStorage.getItem("fav")) ?? [])
    const navigate=useNavigate()
    console.log(allRecipes)

    useEffect(() => {
        setAllRecipes(recipes)
    }, [recipes])

    const onDelete = async (id) => {
        const token = localStorage.getItem("token")
        await axios.delete(`http://localhost:5000/recipe/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => console.log(res))
        setAllRecipes(recipes => recipes.filter(recipe => recipe._id !== id))
        let filterItem = favItems.filter(recipe => recipe._id !== id)
        localStorage.setItem("fav", JSON.stringify(filterItem))
    }

    const favRecipe = (item) => {
        let alreadyFav = favItems.some(recipe => recipe._id === item._id)
        let updatedFavs = alreadyFav
            ? favItems.filter(recipe => recipe._id !== item._id)
            : [...favItems, item]
        localStorage.setItem("fav", JSON.stringify(updatedFavs))
        setFavItems(updatedFavs)
    }

    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item, index) => {
                        return (
                            <div key={index} className='card'>
                                <div className="card-img-wrapper" onClick={() => navigate(`/recipe/${item._id}`)}>
                                    <img src={`http://localhost:5000/images/${item.coverImage}`} alt={item.title} />
                                    <div className="card-img-overlay">
                                        <span className="view-details-btn">View Details</span>
                                    </div>
                                </div>
                                <div className='card-body'>
                                    <div className='title'>{item.title}</div>
                                    <div className='icons'>
                                        <div className='timer'><BsStopwatchFill />{item.time}</div>
                                        <FaHeart className="favIcon" onClick={() => favRecipe(item)}
                                            style={{ color: (favItems.some(res => res._id === item._id)) ? "red" : "" }} />
                                        <div className='action'>
                                            <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>
                                            <MdDelete onClick={() => onDelete(item._id)} className='deleteIcon' />
                                        </div>
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