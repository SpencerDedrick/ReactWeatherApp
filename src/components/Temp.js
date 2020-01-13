import React from "react"

const Temp = (props) => {
    return(
        <div className="temp">{ props.temp }<span>°F</span></div>
    )
}

export default Temp