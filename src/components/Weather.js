//the Weather component will display the current weather conditions of the searched location (cloudy, raining, etc.)

import React from "react"

const Weather = (props) => {
    return(
        <div className="weather">{ props.weather }</div>
    )
}

export default Weather