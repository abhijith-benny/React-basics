import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import { useState } from 'react';

function App() {
    const [userName, setUserName] = useState("Joe")
    return (
        <div className="app">
            <Header userName={userName} />
            <Body userName={userName} />
        </div>
    );
}
export default App;