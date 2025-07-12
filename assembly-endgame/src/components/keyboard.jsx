import React from 'react';

function KeyBoard({setSelectedWord}) {
    const [guessedLetters, setGuessedLetters] = React.useState([]);
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


    return (
        <div className="keyboard">
            <div className="row">
                <button className="key" onClick={() => handleKeyClick("A")}>A</button>
                <button className="key" onClick={() => handleKeyClick("B")}>B</button>
                <button className="key" onClick={() => handleKeyClick("C")}>C</button>
                <button className="key" onClick={() => handleKeyClick("D")}>D</button>
                <button className="key" onClick={() => handleKeyClick("E")}>E</button>
                <button className="key" onClick={() => handleKeyClick("F")}>F</button>
                <button className="key" onClick={() => handleKeyClick("G")}>G</button>
                <button className="key" onClick={() => handleKeyClick("H")}>H</button>
                <button className="key" onClick={() => handleKeyClick("I")}>I</button>
                <button className="key" onClick={() => handleKeyClick("J")}>J</button>
            </div>
            <div className="row">
                <button className="key" onClick={() => handleKeyClick("K")}>K</button>
                <button className="key" onClick={() => handleKeyClick("L")}>L</button>
                <button className="key" onClick={() => handleKeyClick("M")}>M</button>
                <button className="key" onClick={() => handleKeyClick("N")}>N</button>
                <button className="key" onClick={() => handleKeyClick("O")}>O</button>
                <button className="key" onClick={() => handleKeyClick("P")}>P</button>
                <button className="key" onClick={() => handleKeyClick("Q")}>Q</button>
                <button className="key" onClick={() => handleKeyClick("R")}>R</button>
                <button className="key" onClick={() => handleKeyClick("S")}>S</button>
                <button className="key" onClick={() => handleKeyClick("T")}>T</button>
            </div>
            <div className="row">
                <button className="key" onClick={() => handleKeyClick("U")}>U</button>
                <button className="key" onClick={() => handleKeyClick("V")}>V</button>
                <button className="key" onClick={() => handleKeyClick("W")}>W</button>
                <button className="key" onClick={() => handleKeyClick("X")}>X</button>
                <button className="key" onClick={() => handleKeyClick("Y")}>Y</button>
                <button className="key" onClick={() => handleKeyClick("Z")}>Z</button>
            </div>
        </div>
    );
}
export default KeyBoard;