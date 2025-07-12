import React from "react";

function Word({ selectedWord, currentWord }) {
    console.log("Selected Word:", selectedWord);
    const letterElements = currentWord.split("").map((letter) => letter.toLowerCase());
    return (
        <div className="word" style={{ display: "flex", gap: "4px" }}>
            {letterElements.map((letter, idx) => (
                <span
                    key={idx}
                    style={{
                        padding: "8px 10px",
                        borderRadius: "4px",
                        fontSize: "1.3rem",
                        background: "#2d3748", // deep slate blue
                        boxShadow: "0 4px 16px rgba(0,0,0,0.20)",
                        fontFamily: "monospace",
                        textTransform: "uppercase",
                        color: "#f7fafc", // light gray
                        borderBottom: "2px solid #4299e1", // blue accent
                    }}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
}
export default Word;