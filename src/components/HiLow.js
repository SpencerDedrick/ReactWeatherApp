import React from "react"

const HiLow = (props) => {
    return(
        <div className="hi-low">{ props.hilow[0] }°F / { props.hilow[1] }°F</div>
    )
}

export default HiLow