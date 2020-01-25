//The Date component displays the date of using momemnt.js

import React from "react"

const Date = () => {
    const moment = require('moment');
    return(
        <div className="date">{`${moment().format('MMMM Do YYYY')}`}</div>
    )
}

export default Date