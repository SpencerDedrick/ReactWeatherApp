//The Location component will contain the City and Date Components

import React from "react"
import City from "./City"
import Date from "./Date"

const Location = (props) => {
    return(
        <div className="location">
            <City city={props.city}/>
            <Date />
        </div>
    )
}

export default Location