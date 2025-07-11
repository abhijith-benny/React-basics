import { languages } from "./languages.js"

function LanguageList(){
    const language=languages.map((language, index) => {
        return (
            <div key={index} className="language" style={{ backgroundColor: language.backgroundColor, color: language.color }}>
                <h3>{language.name}</h3>
            </div>
        );
    });
    
    return (
        <div className="language-list">
            <h2>Programming Languages</h2>
            <div className="languages">
                {language}
            </div>
        </div>
    );
}
export default LanguageList;