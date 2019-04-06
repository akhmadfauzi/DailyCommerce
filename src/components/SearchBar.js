import React, { Component } from 'react'
import '../styles/dist/searchBar.css';
const SearchBar = (props)=>{
  return (
    <div className="search-bar">
        <input type="text" placeholder="Enter products name..." onKeyPress={props.onSearch}/>
    </div>
  );
}

export default SearchBar;