import React from "react";

function Word({ selectedWord, currentWord, setIsGameWon, wrongGuessCount }) {
    const [IsGameWonState, setIsGameWonState] = React.useState(false);

    const revealedLetters = currentWord.split("").map((letter) =>
        selectedWord.includes(letter) ? letter.toUpperCase() : ""
    );

    React.useEffect(() => {
        if (revealedLetters.join("") === currentWord.toUpperCase()) {
            setIsGameWon(true);
            setIsGameWonState(true);
        }
    }, [selectedWord, currentWord, setIsGameWon, revealedLetters]);

    React.useEffect(() => {
        if (wrongGuessCount >= 8 && !IsGameWonState) {
            setIsGameWon(false);
        }
    }, [wrongGuessCount, IsGameWonState, setIsGameWon]);

    let displayElements;

    if (wrongGuessCount >= 8 && !IsGameWonState) {
        // Show all letters, but only unguessed ones in red
        displayElements = currentWord.split("").map((letter, index) => {
            const isGuessed = selectedWord.toLowerCase().includes(letter.toLowerCase());
            return (
                <span
                    key={index}
                    className={isGuessed ? "" : "failed-letter"}
                >
                    {letter.toUpperCase()}
                </span>
            );
        });
    } else {
        // Normal display
        displayElements = revealedLetters.map((letter, index) => (
            <span key={index}>{letter}</span>
        ));
    }

    return (
        <section className="word">
            {displayElements}
        </section>
    );
}

export default Word;