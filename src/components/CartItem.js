import React, { Component } from 'react';

class CartItem extends Component {
	render() {
		const data = this.props.product;
		return (
			<React.Fragment>
				<div className="cart-item">
					<span className="cart-item-name"><button className="cart-delete-btn" ><i className="fa fa-times"></i></button></span> 
					<span className="cart-item-name">{data.name} x </span> 
					<span className="cart-qty">1</span>  
					<span className="cart-price">${data.price}</span>
				</div>
			</React.Fragment>
		);
	}
}

export default CartItem;