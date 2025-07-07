import Die from "./components/die"
import React from "react";

function App() {

  const [arr, setArr] = React.useState(generateRandomNumber());
  function generateRandomNumber() {

    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 6) + 1);
    }
    return arr;
  };


  
  function rollDice() {
    setArr(generateRandomNumber());
  }

  const randomNumbers = generateRandomNumber();

  return (
    <>
      <main className="tenzies">
        <div className="dice-container">
          {randomNumbers.map((num, idx) => (
            <Die key={idx} value={num} />
          ))}
        </div>
        <div className="tenzies-title">
            <button className="roll-dice" onClick={rollDice}>
                Roll Dice
            </button>
        </div>
      </main>
      <footer className="app-footer">
        <p>Made by Abhijith Benny</p>
      </footer>
    </>
  )
};
export default App;