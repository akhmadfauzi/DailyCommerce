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
		const products = this.props.products.map(this.renderProducts.bind(this))
		return (
			<React.Fragment>
				{products}
			</React.Fragment>
		);
	}
}

export default ProductList;