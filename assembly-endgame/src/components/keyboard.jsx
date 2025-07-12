import { useState } from "react"
import { clsx } from "clsx"
import React from "react"

export default function KeyBoard({setSelectedWord, currentWord}) {
    const [guessedLetters, setGuessedLetters] = useState([])


    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }
    const handleKeyClick = (letter) => {
        if (!guessedLetters.includes(letter)) {
            const updated = [...guessedLetters, letter];
            setGuessedLetters(updated);
            setSelectedWord(updated.join(""));
        }
    };
    React.useEffect(() => {
        setSelectedWord(guessedLetters.join(""));
    }, [guessedLetters]);
    

    const letterElements = currentWord.split("").map((letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
    ))

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        
        
        return (
            <button
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })


    return (
        <section className="keyboard-container">
            <div className="keyboard-row">
                {keyboardElements.slice(0, 10).map(el =>
                    React.cloneElement(el, {
                        onClick: () => handleKeyClick(el.key)
                    })
                )}
            </div>
            <div className="keyboard-row">
                {keyboardElements.slice(10, 20).map(el =>
                    React.cloneElement(el, {
                        onClick: () => handleKeyClick(el.key)
                    })
                )}
            </div>
            <div className="keyboard-row third-row">
                {keyboardElements.slice(20, 26).map(el =>
                    React.cloneElement(el, {
                        onClick: () => handleKeyClick(el.key)
                    })
                )}
            </div>
        </section>
    )
}