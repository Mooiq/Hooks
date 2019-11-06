import React, { useState } from 'react'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.serach(searchValue);
        resetInputField();
    }

    const resetInputField = () => {
        setSearchValue("")
      }

    return (
        <form className="search">
            <input type="text" value={searchValue} onChange={handleSearchInputChanges}/>
            <input type="submit" value="SEARCH" onClick={callSearchFunction}/>
        </form>
    )
}

export default Search;