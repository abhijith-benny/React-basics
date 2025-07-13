import Header from "./components/header";
import Status from "./components/status";
import LanguageList from "./components/languagelist";
import Word from "./components/word";
import KeyBoard from "./components/keyboard";
import NewGameButton from "./components/newgamebutton";
import React from "react";
import words from "./components/words.js";

function App() {
    const [gameState, setGameState] = React.useState({
        currentWord: words[Math.floor(Math.random() * words.length)], // Random word from words.js
        guessedLetters: [],
    });
    const [wrongGuessCount, setWrongGuessCount] = React.useState(0);
    const [selectedWord, setSelectedWord] = React.useState("");
    const [IsGameOver, setIsGameOver] = React.useState(false);
    const [IsGameWon, setIsGameWon] = React.useState(false);
    const [isCorrectGuess, setIsCorrectGuess] = React.useState(false);
    return (
        <>
            <Header />
            <Status IsGameOver={IsGameOver} IsGameWon={IsGameWon} wrongGuessCount={wrongGuessCount} isCorrectGuess={isCorrectGuess} />
            <LanguageList wrongGuessCount={wrongGuessCount} setIsGameOver={setIsGameOver} />
            <Word selectedWord={selectedWord} currentWord={gameState.currentWord} setIsGameWon={setIsGameWon} />
            <KeyBoard setSelectedWord={setSelectedWord} currentWord={gameState.currentWord} setWrongGuessCount={setWrongGuessCount} setIsCorrectGuess={setIsCorrectGuess} IsGameOver={IsGameOver} IsGameWon={IsGameWon} />
            <NewGameButton IsGameOver={IsGameOver} IsGameWon={IsGameWon} />
        </>
    );
}

export default App;