import React, { Component } from 'react';
import Product from './Product';
import NotFound from './ui/NotFound';

class ProductList extends Component {
	renderProducts(e){
		return (
			<Product 
				key={e.id} 
				detail={e} 
				addToCart={this.props.addToCart} 
				onProductClick={this.props.onProductClick}>
			</Product>
		);
	}
	render() {
		const startIndex = this.props.currentPage > 1 ? (this.props.currentPage * this.props.itemPerPage) : 0;
		const products = this.props.products.slice(startIndex,startIndex+this.props.itemPerPage).map(this.renderProducts.bind(this));
		const notFound = <NotFound></NotFound>;
		const result = products.length ? products : notFound;
		return (
			<React.Fragment>
				{result}
			</React.Fragment>
		);
	}
}

export default ProductList;