//The SearchBox component is where users can search a location to check the weather

import React from "react"

const SearchBox = ({ onSearch }) => {
    return(
        <div>
            <input type="text" className="searchBox" autoComplete="off" placeholder="Search for a city..." onKeyDown= { onSearch } ></input>
        </div>
    )
}

export default SearchBox