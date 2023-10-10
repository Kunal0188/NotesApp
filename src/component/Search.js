
import React from "react";

export default function Search({ handleSearch, darkMode }) {

    return (
        <>
            <div className="search-bar">
                <input type="text" className="search_item" placeholder="Search" onChange={(e) => handleSearch(e.target.value.toLowerCase())} />
                <span className="search_icon">
                    <i className="fa-solid fa-magnifying-glass" ></i>
                </span>
                <span className="form-check form-switch" >
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={darkMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                </span>
            </div>
        </>
    );
}