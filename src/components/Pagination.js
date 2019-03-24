import React, { Component } from 'react'

export default class Pagination extends Component {
    getPages(){
        var pages = [];
        for (let i = 0; i < this.props.totalPages; i++) {
            pages.push(i);
        }
        
        return pages;
    }
  render() {
      let pages = this.getPages().map((v)=>(<li>{v}</li>));
      
    return (
        <div className="pagination">
            <ul>
                {pages}
            </ul>
        </div>
    )
  }
}
