import Die from "./components/die"

function App() {
  return (
    <>
      <main className="tenzies">
        <div className="dice-container">
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <Die value={6} />
        </div>
      </main>
      <footer className="app-footer">
        <p>Made by Abhijith Benny</p>
      </footer>
    </>
    )
};
export default App;