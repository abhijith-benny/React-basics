import ReactDom from 'react-dom';
import React from 'react';
import IngredientList from './ingredientlist';
import ClaudeRecipe from './clauderecipe';
import RecipeButton from './recipebutton';
import {getRecipeFromGroq} from './api'


function Body(){
    // You cannot git-ignore only a specific line or variable in a file.
    // Git can only ignore entire files or directories, not individual lines.
    // To avoid committing sensitive data, move the api_key to a separate file (e.g., .env or config.js), git-ignore that file, and import it where needed.
    const [ingredientList, setIngredientList] = React.useState([]);
    const [alertMessage, setAlertMessage] = React.useState("");
    const [recipe, setRecipe] = React.useState("");

    async function getrecipe(){
        const recipeMarkdown=await getRecipeFromGroq(ingredientList)
        setRecipe(recipeMarkdown);
    }

    function handlesubmit(formData){
        const ingredient = formData.get("ingredient");
        const trimmedIngredient = ingredient.trim();
        if (
            trimmedIngredient &&
            !ingredientList.some(
            (item) => item.toLowerCase() === trimmedIngredient.toLowerCase()
            )
        ) {
            const newList = [...ingredientList, ingredient];
            setIngredientList(newList);
        } else {
            setAlertMessage("Ingredient already exists");
            setTimeout(() => setAlertMessage(""), 2000);
        }
    }

    return (
        <>
            <main className="body-main">
                <form className="ingredient-form" action={handlesubmit}>
                    <input
                        aria-label="add-ingredient"
                        type="text"
                        placeholder="Add an ingredient"
                        name="ingredient"
                        id="ingredient"
                        autoComplete="off"
                        required
                        className="ingredient-input"
                    />
                    <button type="submit" className="add-ingredient-btn">Add Ingredient</button>
                </form>
                {alertMessage && (
                    <div className="alert-message">{alertMessage}</div>
                )}
                {ingredientList.length > 0 && (
                    <>
                        <IngredientList ingredients={ingredientList} />
                    </>
                )}
                <>
                    {ingredientList.length > 2 && (
                        <RecipeButton 
                            recipe={ingredientList} 
                            getrecipe={getrecipe}
                        />
                    )}
                </>
            </main>
            <div className="recipe-header">
                {recipe && 
                    <ClaudeRecipe recipe={recipe} />
                }
                
            </div>
        </>
    )
}





export default Body;