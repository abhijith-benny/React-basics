import padsData from "./pads"
import React from 'react';
import Pad from "./pad";

export default function App(props) {
    const [pads, setPads] = React.useState(padsData);

    function toggle(id){
        setPads(prevPads => {
            return prevPads.map(pad => {
                if (pad.id === id) {
                    const updatedPad = {
                        ...pad,
                        on: !pad.on
                    };
                    return updatedPad;
                }
                return pad;
            });
        });
    }

    const buttonelement=pads.map(pads =>(
    <Pad key={pads.id} id={pads.id} color={pads.color} on={pads.on} darkmode={props.darkmode} toggle={toggle} />
        ))
    return (
        <div>
            <div className="pad-container">
                {buttonelement}
            </div>
        </div>
    )
}