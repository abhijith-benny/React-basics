import { useState } from "react";
import React from "react";

function RecipeSection(props) {
  const [recipeReady, setRecipeReady] = useState(false);
  const recipeSection = React.useRef(null);
  

  

  const handleClick = async (e) => {
    if (props.getrecipe) {
      await props.getrecipe(e);
      setRecipeReady(true);

      // Scroll to recipe after loading
      
    }
  };

  React.useEffect(()=>{
    if(recipeReady){
      recipeSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipeReady]);

  return (
    <div className="recipe-ready-section">
      <div className="recipe-ready-header" ref={recipeSection}>
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
