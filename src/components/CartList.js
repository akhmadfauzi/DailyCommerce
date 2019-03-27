import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
	onCartClose(e){
		this.props.onCartClose(e)
	}
	render() {
		const products = this.props.cart.map((product)=>{
			return (
				<CartItem key={product.id} product={product} itemDelete={this.props.itemDelete} onQuantityChange={this.props.onQuantityChange}></CartItem>
			);
		});
		return (
			<div className="cart-list">
				{products}
			</div>
		);
	}
}

export default CartList;