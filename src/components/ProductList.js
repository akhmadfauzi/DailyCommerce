import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
	renderProducts(e){
		return (
			<Product detail={e} addToCart={this.props.addToCart}></Product>
		);
	}
	render() {
		const products = this.props.products.map(this.renderProducts.bind(this))
		return (
			<React.Fragment>
				{products}
			</React.Fragment>
		);
	}
}

export default ProductList;