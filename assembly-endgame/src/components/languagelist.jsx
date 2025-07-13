import { languages } from "./languages.js"
import { useEffect } from "react";
import { FaSkullCrossbones } from "react-icons/fa";


function LanguageList({ wrongGuessCount, setIsGameOver }) {
    // Use wrongGuessCount directly if needed, avoid extra assignment and logging
    const language = languages.map((language, index) => {
        return (
            <div key={index} className="language" style={{ backgroundColor: language.backgroundColor, color: language.color }}>
                <h3>{language.name}</h3>
            </div>
        );
    });
    useEffect(() => {
        if (wrongGuessCount === 8) {
            setIsGameOver(true);
        }
    }, [wrongGuessCount, setIsGameOver]);
    
    return (
        <div className="language-list">
            <h2>Programming Languages</h2>
            <div className="languages">
                {languages.map((language, index) => (
                    <div key={index} className="language" style={{ position: "relative", backgroundColor: language.backgroundColor, color: language.color }}>
                        {wrongGuessCount > index && (
                            <FaSkullCrossbones
                                style={{
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    width: "100%",
                                    top: 0,
                                    left: 0,
                                    padding: "20px", // padding for all four sides
                                    backgroundColor: "#000000b3",
                                    borderRadius: "6px",
                                    color: "white",
                                }}
                            />
                        )}
                        <h3>
                            {language.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default LanguageList;