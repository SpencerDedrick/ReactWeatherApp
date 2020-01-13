import React from "react"

const SearchBox = ({ onSearch }) => {
    return(
        <div>
            <input type="text" className="searchBox" autoComplete="off" placeholder="Search for a city..." onKeyDown= { onSearch }></input>
        </div>
    )
}

export default SearchBox