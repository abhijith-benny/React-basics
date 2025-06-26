import ReactMarkdown from 'react-markdown';

function ClaudeRecipe(props) {
  return (
    <div className="recipe-code" id="recipe-code">
        <h2>Generated Recipe</h2>
        <pre className="recipe-text">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </pre>
    </div>
  );
}

export default ClaudeRecipe;