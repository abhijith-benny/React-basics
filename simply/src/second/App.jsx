import padsData from "./pads"
import React from 'react';
import Pad from "./pad";

export default function App(props) {
    const [pads, setPads] = React.useState(padsData);
    const buttonelement=pads.map(pads =>(
    <Pad key={pads.id} color={pads.color} on={pads.on} darkmode={props.darkmode} />
        ))
    return (
        <div>
            <div className="pad-container">
                {buttonelement}
            </div>
        </div>
    )
}