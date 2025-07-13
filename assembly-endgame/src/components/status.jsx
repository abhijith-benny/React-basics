import Confetti from "react-confetti";

function Status({ IsGameOver, IsGameWon }) {
    if (!IsGameWon && !IsGameOver) {
        return null;
    }

    return (
        <div
            className="status"
            style={IsGameWon ? {} : { backgroundColor: '#ba2a2a', color: 'white', border: 'none' }}
        >
            {IsGameWon ? (
                <>
                    <Confetti />
                    <h2>You Win!</h2>
                    <p>Congratulations! You guessed the word correctly.</p>
                </>
            ) : (
                <>
                    <h2>Game Lose</h2>
                    <p>You lose! Better start learning assembly.</p>
                </>
            )}
        </div>
    );
}

export default Status;