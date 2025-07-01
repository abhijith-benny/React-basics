import { useState } from "react";

function Body() {
  const [meme,setMeme] = useState({
    topText: "Some text ",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  });
  function handleChange(event){
    const {value,name} = event.currentTarget;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  }
  return (
    <main className="meme-generator">
      <h1 className="meme-title">Generate your meme</h1>

      <div className="meme-input-container">

        <label className="meme-label">
          <h3 className="meme-label-title">Top Text</h3>
          <input type="text" className="meme-input" onChange={handleChange} name="topText" value={meme.topText} />
        </label>

        <label className="meme-label">
          <h3 className="meme-label-title">Bottom Text</h3>
          <input type="text" className="meme-input" onChange={handleChange} name="bottomText" value={meme.bottomText} />
        </label>

      </div>
      <button className="meme-button">Generate Meme</button>

      <div className="meme-image-container">
        <img src={meme.imageUrl} className="meme-image" />
        <span className="meme-text top">{meme.topText}</span>
        <span className="meme-text bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

export default Body;
