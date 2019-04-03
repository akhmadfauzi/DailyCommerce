import React, { Component } from 'react';
import '../styles/dist/pagination.css';
export default class Pagination extends Component {

  render() {
	const currentPage = parseInt(this.props.currentPage);
	const adjacent = parseInt(this.props.adjacent);
	const totalPages= parseInt(this.props.totalPages);
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
	const firstPage = 1;
	const lastPage = totalPages;
	const first = (currentPage > 1 && (currentPage-adjacent) > 1) ? (<li key={0} className="first-page" onClick={this.props.onPageChange} data-page-number={firstPage} title="Go to first page"><i className="fa fa-angle-double-left"></i></li>) : '';
	const last = (currentPage < totalPages && (currentPage+adjacent) < totalPages) ? (<li key={totalPages-1} className="first-page" onClick={this.props.onPageChange} data-page-number={lastPage} title="Go to last page"><i className="fa fa-angle-double-right"></i></li>) : '';
	
    return (
        <div className="pagination">
            <ul>
								{first}
                {pages}
                {last}
            </ul>
        </div>
    )
  }
}

