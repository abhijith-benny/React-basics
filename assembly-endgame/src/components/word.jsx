import React from "react";

function Word({ selectedWord, currentWord, setIsGameWon }) {
    
    const revealedLetters = currentWord.split("").map((letter) =>
        selectedWord.includes(letter) ? letter.toUpperCase() : ""
    );
    const letterElements = revealedLetters.map((letter, index) => (
        <span key={index}>
            {letter}
        </span>
    ));
    React.useEffect(() => {
        if (revealedLetters.join("") === currentWord.toUpperCase()) {
            setIsGameWon(true);
        }
    }, [selectedWord, currentWord, setIsGameWon, revealedLetters]);
    return (
        <section className="word">
            {letterElements}
        </section>
    );
}
export default Word;