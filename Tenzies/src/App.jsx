import Die from "./components/die"
import React from "react";

function App() {

  const [arr, setArr] = React.useState(generateRandomNumber());
  function generateRandomNumber() {

    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({value: (Math.floor(Math.random() * 6) + 1), isHeld:false});
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
        <div className="tenzies-header">
          Tenzies
          <br /><span>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls
          </span>
        </div>
        <div className="dice-container">
          {arr.map((dieobj, idx) => (
            <Die key={idx} value={dieobj.value} isHeld={dieobj.isHeld} />
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