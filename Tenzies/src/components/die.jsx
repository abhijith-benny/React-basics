

function Die(props){
    return (
        <button className="die" style={props.isHeld ? { backgroundColor: "#59E391" } :{}} 
            onClick={()=>props.hold(props.id)}    
        >
            {props.value}
        </button>
    )
}
export default Die;