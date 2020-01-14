import React from "react"
import Temp from "./Temp"
import HiLow from "./HiLow"
import Weather from "./Weather"

const Current = (props) => {
    return (
        <div className = "current">
            <Temp 
            temp={ props.temp }
            unit={ props.unit } 
            toggleUnit={ props.toggleUnit }/>

            <Weather weather={ props.weather } />

            <HiLow 
            hilow={ props.hilow } 
            unit={ props.unit } 
            toggleUnit={ props.toggleUnit }/>
            
        </div>
    )
}

export default Current