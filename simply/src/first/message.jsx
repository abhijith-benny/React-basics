import React from "react";

function Message(){
    const [message, setMessage] = React.useState(["a","b", "c"]);
    const [isshown, setIsshown] = React.useState(false);
    return (
        <div className="message-container">
            <h2>{message.length === 0 ? "There are no messages" : "Messages:"}</h2>
            <h2>{message.length === 1 ? "There is 1 message" : `There are ${message.length} messages`}</h2>
        </div>
    );
}

export default Message;