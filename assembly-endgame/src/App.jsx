import Header from "./components/header";
import Status from "./components/status";
import LanguageList from "./components/languagelist";
import Word from "./components/word";
import KeyBoard from "./components/keyboard";
import NewGameButton from "./components/newgamebutton";
import React from "react";

function App() {
    const [gameState, setGameState] = React.useState({
        currentWord: "react", // This should be dynamically set based on the selected language
        guessedLetters: [],
    });
    const [wrongGuessCount,setWrongGuessCount]=React.useState([]);
    const [selectedWord, setSelectedWord] = React.useState("");
    const [IsGameOver, setIsGameOver] = React.useState(false);
    const [IsGameWon, setIsGameWon] = React.useState(false);
    return (
        <>
            <Header />
            <Status IsGameOver={IsGameOver} IsGameWon={IsGameWon} />
            <LanguageList wrongGuessCount={wrongGuessCount} setIsGameOver={setIsGameOver} />
            <Word selectedWord={selectedWord} currentWord={gameState.currentWord} setIsGameWon={setIsGameWon} />
            <KeyBoard setSelectedWord={setSelectedWord} currentWord={gameState.currentWord} setWrongGuessCount={setWrongGuessCount} />
            <NewGameButton IsGameOver={IsGameOver} IsGameWon={IsGameWon} />
        </>
    );
}

export default App;