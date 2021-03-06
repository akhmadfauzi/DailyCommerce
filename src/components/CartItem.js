import React, { Component } from 'react';
import '../styles/dist/cart-item.css';

class CartItem extends Component {
	render() {
		const data = this.props.product;
		const total = Math.fround(data.price * data.quantity).toFixed(2);
		const name = data.name.length > 19 ? data.name.substr(0,18) + '...': data.name;
		return (
			<React.Fragment>
				<div className="cart-item" title={data.name}>
					<span className="cart-item-name"><button className="cart-delete-btn" onClick={this.props.itemDelete} data-id={data.id}><i className="fa fa-times"></i></button></span> 
					<span className="cart-item-name">{name} x </span> 
					<span className="cart-qty"><input type="number" value={data.quantity} data-id={data.id} onChange={this.props.onQuantityChange}/></span>  
					<span className="cart-price">${total}</span>
				</div>
			</React.Fragment>
		);
	}
}

export default CartItem;
