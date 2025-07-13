

function NewGameButton({ IsGameOver, IsGameWon }) {
    if (!IsGameOver && !IsGameWon) {
        return null;
    }
    return (
        <>
            {IsGameOver && (
                <button className="new-game-button">
                    New Game
                </button>
            )}
            {IsGameWon && (
                <button className="new-game-button">
                    New Game
                </button>
            )}
        </>
    );
}
export default NewGameButton;