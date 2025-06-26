

function ClaudeRecipe(props) {
  return (
    <div className="recipe-code" id="recipe-code">
        <h2>Generated Recipe</h2>
        <pre className="recipe-text">
            {props.recipe}
        </pre>
    </div>
  );
}

export default ClaudeRecipe;