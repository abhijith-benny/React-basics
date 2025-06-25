import React from 'react';

function Pad(props){
    
        return (
            <main>
                <button 
                    style={{ backgroundColor: props.darkmode ? `${props.color}` : "#FFF"} } 

                    onClick={() => props.toggle(props.id)}
                    className={props.on ? "on" : undefined}
                ></button>

            </main>
        )
}
export default Pad;