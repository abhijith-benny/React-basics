

function RecipeButton(props) {    
  return (
    <>
      <div className="recipe-ready-section">
        <div className="recipe-ready-header">
          <h1>Ready for a recipe</h1>
          <p>Generate a recipe from your list of ingredients</p>
        </div>
        <div className="recipe-ready-action">
          <button className="generate-recipe-btn" onClick={props.getrecipe}>Generate Recipe</button>
        </div>
        </div>
    </>
  );
}

export default RecipeButton;