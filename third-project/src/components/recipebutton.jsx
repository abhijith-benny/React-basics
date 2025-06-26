import { useState } from "react";

function RecipeSection(props) {
  const [recipeReady, setRecipeReady] = useState(false);

  const handleClick = async (e) => {
    if (props.getrecipe) {
      await props.getrecipe(e);
      setRecipeReady(true);

      // Scroll to recipe after loading
      const element = document.getElementById('recipe-code');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="recipe-ready-section">
      <div className="recipe-ready-header">
        <h1>Ready for a recipe</h1>
        <p>Generate a recipe from your list of ingredients</p>
      </div>

      <div className="recipe-ready-action">
        {!recipeReady ? (
          <button
            className="generate-recipe-btn"
            onClick={handleClick}
          >
            Generate Recipe
          </button>
        ) : (
          <a
            href="#recipe-code"
            className="generate-recipe-btn"
          >
            View Recipe
          </a>
        )}
      </div>
    </div>
  );
}

export default RecipeSection;
