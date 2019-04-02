import React, { Component } from 'react'
import '../styles/dist/pagination.css';
export default class Pagination extends Component {
    getPages(){

        var pages = [];
        for (let i = 0; i < this.props.totalPages; i++) {
            pages.push(i);
        }
        
        return pages;
	}
	
  render() {
	const currentPage = parseInt(this.props.currentPage);
	const adjacent = parseInt(this.props.adjacent);
	const totalPages= this.props.totalPages;
	let pages = [];

	for (let i = 0; i < totalPages; i++) {
		const pageNumber = (i+1);
		const active = ( currentPage === pageNumber) ? 'active' : '';
		if(pageNumber >= (currentPage - adjacent) && pageNumber <= currentPage && pageNumber !== currentPage){
			pages = [...pages,(<li key={i} onClick={this.props.onPageChange} data-page-number={pageNumber}>{pageNumber}</li>)];
		}

		if(currentPage === pageNumber){
			pages = [...pages,(<li className={active} key={i}>{pageNumber}</li>)];
		}

		if(pageNumber <= (currentPage + adjacent) && pageNumber >= currentPage && pageNumber !== currentPage){
			pages= [...pages,(<li key={i} onClick={this.props.onPageChange} data-page-number={pageNumber}>{pageNumber}</li>)];
		}
	}
	
    return (
        <div className="pagination">
            <ul>
                {pages}
            </ul>
        </div>
    )
  }
}
