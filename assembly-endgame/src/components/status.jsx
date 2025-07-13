

function Status({ IsGameOver, IsGameWon }) {
    if (!IsGameOver) {
        return null;
    }
    return (
        <div className="status">
            {IsGameWon ? (
                <>
                    <h2>You Win!</h2>
                    <p>Congratulations! You guessed the word correctly.</p>
                </>
            ) : (
                <>
                    <h2>Game Lose</h2>
                    <p>Sorry, you've run out of guesses.</p>
                </>
            )}
        </div>
    );
}

export default Status;