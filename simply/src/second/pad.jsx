

function Pad(props){
        return (
            <main>
                <button 
                    style={{ backgroundColor: props.darkmode ? `${props.color}` : "#FFF"} } 
                    className={props.on ? "on" : ""}
                ></button>

            </main>
        )
}
export default Pad;