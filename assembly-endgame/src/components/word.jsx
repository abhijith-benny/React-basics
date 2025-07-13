import React from "react";

function Word({ selectedWord, currentWord }) {
    const letterElements = currentWord.split("").map((letter, index) => (
        <span key={index}>
            {selectedWord.includes(letter) ? letter.toUpperCase() : ""}
         </span>
    ))
    return (
        <section className="word">
            {letterElements}
        </section>
    );
}
export default Word;