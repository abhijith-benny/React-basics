import Confetti from "react-confetti";

function Status({ IsGameOver, IsGameWon, wrongGuessCount, isCorrectGuess }) {
    
    // console.log("wrongGuessCount:", wrongGuessCount);
    // if (!IsGameWon && !IsGameOver) {
    //     return null;
    // }
    let statusStyle = {};
    if (IsGameOver) {
        if (IsGameWon) {
            statusStyle = {};
        } else {
            statusStyle = { backgroundColor: '#ba2a2a', color: 'white', border: 'none', boxShadow: 'none' };
        }
    } else if (wrongGuessCount > 0 && !IsGameWon && !IsGameOver && !isCorrectGuess) {
        statusStyle = { minHeight: "80px", backgroundColor: '#7a5ea7', color: 'white', border: 'none', boxShadow: 'none', paddingTop: '25px', fontSize: '1.1rem', fontWeight: '500', lineHeight: '1.5' };
    } else if (IsGameWon) {
        statusStyle = { minHeight: "80px", backgroundColor: '#10a95b', color: 'white', border: 'none', boxShadow: 'none' };
    } else if (wrongGuessCount === 0 || isCorrectGuess) {
        statusStyle = { minHeight: "80px", backgroundColor: '#262626', border: 'none', boxShadow: 'none' };
    }

    // Only show "Oh no, not HTML!" when both IsGameWon and IsGameOver are false and wrongGuessCount > 0
    // Show a different message for each wrongGuessCount from 1 to 8, only when both IsGameWon and IsGameOver are false
    const wrongGuessMessages = [
        "Oh no, not HTML!",
        "Careful! That's not it.",
        "Try again, don't give up!",
        "Getting tricky, isn't it?",
        "Keep going, you can do it!",
        "Almost out of guesses!",
        "Last chance, make it count!",
        "Game over is near!"
    ];

    return (
        <div
            className="status"
            style={statusStyle}
        >
            {wrongGuessCount > 0 && wrongGuessCount <= 8 && !IsGameWon && !IsGameOver && !isCorrectGuess && (
                <p>{wrongGuessMessages[wrongGuessCount - 1]}</p>
            )}

            {IsGameWon && (
                <>
                    <Confetti />
                    <h2>You Win!</h2>
                    <p>Congratulations! You guessed the word correctly.</p>
                </>
            )}
            {IsGameOver && (
                <>
                    <h2>Game Lose</h2>
                    <p>You lose! Better start learning assembly.</p>
                </>
            )}
        </div>
    );
}

export default Status;