//The Footer component links to my personal portfolio page

import React from "react"

const Footer = () => {
    return(
        <div className="footer">
        <a target="_blank" rel="noopener noreferrer" href="https://spencerdedrick.netlify.com/" className="footer">Coded By Spencer Dedrick</a>
        <br/>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/SpencerDedrick/ReactWeatherApp" className="footer">View Source Code</a> 
        </div>  )
} 

export default Footer