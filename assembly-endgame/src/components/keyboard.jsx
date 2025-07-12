import { useState } from "react"
import { clsx } from "clsx"

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
        
        console.log(className)
        
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
    {keyboardElements.slice(0, 10)}
  </div>
  <div className="keyboard-row">
    {keyboardElements.slice(10, 20)}
  </div>
  <div className="keyboard-row third-row">
    {keyboardElements.slice(20, 26)}
  </div>
</section>

    )
}