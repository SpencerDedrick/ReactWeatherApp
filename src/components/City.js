//The City component displays the city name that is fetched from the OpenWeatherMap API
import React from "react"

const City = (props) => {
    return(
        <div className="city"> { props.city }</div>
    )
}

export default City