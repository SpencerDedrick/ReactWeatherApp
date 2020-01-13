import React from "react"

const Weather = (props) => {
    return(
        <div className="weather">{ props.weather }</div>
    )
}

export default Weather