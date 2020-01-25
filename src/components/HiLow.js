//The HiLow component displays the Hi temp and Low temp 

import React from "react"

const HiLow = (props) => {
    return(
        <div className="hi-low noselect" onClick={ props.toggleUnit }>{ props.hilow[0] }°{ props.unit } / { props.hilow[1] }°{ props.unit }</div>
    )
}

export default HiLow