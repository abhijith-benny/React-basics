import ReactDom from 'react-dom';
import React from 'react';


function Body(){
    // Using a state variable to manage the list of ingredients
    // This allows React to re-render the component when the list changes
    // const [ingredientList, setIngredientList] = React.useState([]);
    const [ingredientList, setIngredientList] = React.useState([]);
    const [alertMessage, setAlertMessage] = React.useState("");
     
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
            console.log(`Added ingredient: ${newList}`);
        } else {
            setAlertMessage("Ingredient already exists");
            setTimeout(() => setAlertMessage(""), 2000);
        }
    }

    return (
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
                <ul>
                    <h2>Ingredients On Hand</h2>
                    {ingredientList.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">
                            {ingredient}
                        </li>
                    ))}
                </ul>
            )}
            {ingredientList.length > 2 && (
                <div className="recipe-ready-section">
                    <div className="recipe-ready-header">
                        <h1>Ready for a recipe</h1>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <div className="recipe-ready-action">
                        <button className="generate-recipe-btn">Generate Recipe</button>
                    </div>
                </div>
            )}
        </main>
    )
}





export default Body;