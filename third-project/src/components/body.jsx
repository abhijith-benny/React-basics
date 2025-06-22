function Body(){
    return(
        <main className="body-main">
            <form className="ingredient-form">
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
        </main>
    )
}

export default Body;