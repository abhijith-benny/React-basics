// import Header from "./components/header";
// import Body from "./components/body";

// function App() {
//   return (
//     <>
//       <Header />
//       <Body />
//     </>
//   );
// }

// export default App;





// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(1)
    
    
//     React.useEffect(function() {
//       console.log("Component mounted or count changed")
//         fetch(`https://swap i.dev/api/people/1`)
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [count])
    
//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }




import WindowTracker  from "./WindowTracker";
import { useState, useEffect } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
      <div className="app-container">
      <button className="window-tracker-btn" onClick={() => setShow(prevShow => !prevShow)}>Window Tracker</button>
      {show && <WindowTracker />}
      </div>
    )
}