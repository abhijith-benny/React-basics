import { createElement } from "react";
import {createRoot} from "react-dom/client";
import Header from "./assets/components/header";
import Main from "./assets/components/maincom";
import Footer from "./assets/components/footer";

const root = createRoot(document.getElementById('root'));

function Top(){
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
};


root.render(
    <Top />
);
