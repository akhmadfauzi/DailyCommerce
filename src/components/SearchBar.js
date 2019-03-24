import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search product..." onKeyPress={this.props.onSearch}/>
        </div>
    )
  }
}
