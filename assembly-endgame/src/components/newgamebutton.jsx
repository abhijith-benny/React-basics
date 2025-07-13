

function NewGameButton({ IsGameOver, IsGameWon }) {
    if (!IsGameOver && !IsGameWon) {
        return null;
    }
    return (
        <>
            {(IsGameOver || IsGameWon) && (
                <button
                    className="new-game-button"
                    onClick={() => {
                        if (typeof window !== "undefined" && window.location) {
                            window.location.reload();
                        }
                    }}
                >
                    New Game
                </button>
            )}
        </>
    );
}
export default NewGameButton;