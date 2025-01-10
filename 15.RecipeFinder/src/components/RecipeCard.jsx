import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3 className="title">{recipe.title}</h3>
    </div>
  );
};

export default RecipeCard;
