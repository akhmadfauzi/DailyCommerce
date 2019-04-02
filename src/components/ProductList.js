import React, { Component } from 'react';
import Product from './Product';

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
		return (
			<React.Fragment>
				{products}
			</React.Fragment>
		);
	}
}

export default ProductList;