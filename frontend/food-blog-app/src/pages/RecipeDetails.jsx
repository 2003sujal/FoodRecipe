import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { BsStopwatchFill } from 'react-icons/bs'
import { FaUser, FaArrowLeft, FaListUl, FaBookOpen } from 'react-icons/fa'

export default function RecipeDetails() {
  const recipe = useLoaderData()
  const navigate = useNavigate()

  return (
    <div className="recipe-detail-page">
      {/* Hero Banner */}
      <div className="recipe-detail-hero">
        <img
          src={`http://localhost:5000/images/${recipe.coverImage}`}
          alt={recipe.title}
          className="recipe-detail-hero-img"
        />
        <div className="recipe-detail-hero-overlay">
          <button className="recipe-back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
          <h1 className="recipe-detail-title">{recipe.title}</h1>
          <div className="recipe-detail-meta">
            <span className="recipe-meta-chip">
              <BsStopwatchFill /> {recipe.time}
            </span>
            <span className="recipe-meta-chip">
              <FaUser /> {recipe.email}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="recipe-detail-body">

        {/* Ingredients */}
        <div className="recipe-detail-card">
          <h2 className="recipe-section-title">
            <FaListUl className="section-icon" /> Ingredients
          </h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="ingredient-item">
                {ing}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="recipe-detail-card">
          <h2 className="recipe-section-title">
            <FaBookOpen className="section-icon" /> Instructions
          </h2>
          <div className="instructions-text">
            {recipe.instructions
              .split('\n')
              .filter(step => step.trim())
              .map((step, i) => (
                <div key={i} className="instruction-step">
                  <span className="step-number">{i + 1}</span>
                  <p>{step.trim().replace(/^\d+\.\s*/, '')}</p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}
