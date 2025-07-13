import { useState, useEffect } from "react";
import { clsx } from "clsx";
import React from "react";

export default function KeyBoard({ setSelectedWord, currentWord, setWrongGuessCount, setIsCorrectGuess , IsGameOver , IsGameWon }) {
    const [guessedLetters, setGuessedLetters] = useState([]);

    useEffect(() => {
        const wrongGuesses = guessedLetters.filter(
            letter => !currentWord.includes(letter)
        ).length;
        setWrongGuessCount(wrongGuesses);

        // Set isCorrectGuess to true if the last guessed letter is correct
        if (guessedLetters.length > 0) {
            const lastGuessed = guessedLetters[guessedLetters.length - 1];
            setIsCorrectGuess(currentWord.includes(lastGuessed));
        } else {
            setIsCorrectGuess(false);
        }
    }, [guessedLetters, currentWord, setWrongGuessCount, setIsCorrectGuess]);

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        );
    }

    const handleKeyClick = (letter) => {
        if (!guessedLetters.includes(letter)) {
            const updated = [...guessedLetters, letter];
            setGuessedLetters(updated);
            setSelectedWord(updated.join(""));
        }
    };

    useEffect(() => {
        setSelectedWord(guessedLetters.join(""));
    }, [guessedLetters, setSelectedWord]);

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        const isWrong = isGuessed && !currentWord.includes(letter);
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        });

        return (
            <button
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        );
    });

    return (
        <section className="keyboard-container">
            <div className="keyboard-row">
                {keyboardElements.slice(0, 10).map(el =>
                    React.cloneElement(el, {
                        onClick: () => !(IsGameOver || IsGameWon) && handleKeyClick(el.key),
                        disabled: IsGameOver || IsGameWon
                    })
                )}
            </div>
            <div className="keyboard-row">
                {keyboardElements.slice(10, 20).map(el =>
                    React.cloneElement(el, {
                        onClick: () => !(IsGameOver || IsGameWon) && handleKeyClick(el.key),
                        disabled: IsGameOver || IsGameWon
                    })
                )}
            </div>
            <div className="keyboard-row third-row">
                {keyboardElements.slice(20, 26).map(el =>
                    React.cloneElement(el, {
                        onClick: () => !(IsGameOver || IsGameWon) && handleKeyClick(el.key),
                        disabled: IsGameOver || IsGameWon
                    })
                )}
            </div>
        </section>
    );
}