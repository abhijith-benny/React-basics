

function IngredientList({ ingredients }) {
  return (
    <ul>
        <h2>Ingredients On Hand</h2>
        {ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
                {ingredient}
            </li>
        ))}
    </ul>
  );
}

export default IngredientList;