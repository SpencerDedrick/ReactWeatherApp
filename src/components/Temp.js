import React from "react"

const Temp = (props) => {
    return(
        <div className="temp noselect" onClick={ props.toggleUnit }>{ props.temp }<span>°{ props.unit }</span></div>
    )
}

export default Temp