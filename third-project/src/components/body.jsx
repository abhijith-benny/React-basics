import ReactDom from 'react-dom';
import React from 'react';


function Body(){
    // Using a state variable to manage the list of ingredients
    // This allows React to re-render the component when the list changes
    // const [ingredientList, setIngredientList] = React.useState([]);
    const [ingredientList, setIngredientList] = React.useState([]);
    const [alertMessage, setAlertMessage] = React.useState("");
    function handlevent(){
        
    }

    function handlesubmit(event){
        event.persist();
        event.preventDefault();
        const formData = new FormData(event.target);
        const ingredient = formData.get("ingredient");
        const trimmedIngredient = ingredient.trim();
        if (trimmedIngredient && !ingredientList.includes(trimmedIngredient)) {
            const newList = [...ingredientList, ingredient];
            setIngredientList(newList);
            event.target.reset(); // Clear the input field after submission
            console.log(`Added ingredient: ${newList}`);
        } else {
            event.target.reset();
            setAlertMessage("Ingredient already exists");
            
            // Optionally, you can add inline style to the alert message
            setTimeout(() => setAlertMessage(""), 2000);
        }
    }

    return (
        <main className="body-main">
            <form className="ingredient-form" onSubmit={handlesubmit}>
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
                <button type="submit" className="add-ingredient-btn" onClick={handlevent}>Add Ingredient</button>
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
        </main>
    )
}





export default Body;