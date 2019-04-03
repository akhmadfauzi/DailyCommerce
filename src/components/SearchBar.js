import React, { Component } from 'react'
import '../styles/dist/searchBar.css';
export default class SearchBar extends Component {
  render() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Enter products name" onKeyPress={this.props.onSearch}/>
        </div>
    )
  }
}
