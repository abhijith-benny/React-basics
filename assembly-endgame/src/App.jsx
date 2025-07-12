import Header from "./components/header";
import Status from "./components/status";
import LanguageList from "./components/languagelist";
import Word from "./components/word";
import KeyBoard from "./components/keyboard";
import NewGameButton from "./components/newgamebutton";

function App() {
  return (
    <>
        <Header />
        <Status />
        <LanguageList />
        <Word />
        <KeyBoard />
        <NewGameButton />
    </>
  );
}

export default App;