import Header from "./components/header";
import Status from "./components/status";
import LanguageList from "./components/languagelist";
import Word from "./components/word";
import KeyBoard from "./components/keyboard";
import NewGameButton from "./components/newgamebutton";
import React from "react";

function App() {
    const [gameState, setGameState] = React.useState({
        currentWord: "example", // This should be dynamically set based on the selected language
        guessedLetters: [],
    });
    const [selectedWord, setSelectedWord] = React.useState("");
    return (
        <>
            <Header />
            <Status />
            <LanguageList />
            <Word selectedWord={selectedWord} currentWord={gameState.currentWord} />
            <KeyBoard setSelectedWord={setSelectedWord} currentWord={gameState.currentWord} />
            <NewGameButton />
        </>
    );
}

export default App;