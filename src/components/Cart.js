import React, { Component } from 'react';
import CartList from './CartList';

class Cart extends Component {
	
	render() {
		let cartClass = this.props.openCart ? 'cart cart-show' : 'cart';
		const cartOverlayClass = this.props.openCart ? 'cart-overlay cart-overlay-show' : 'cart-overlay';
		return (
			<React.Fragment>
				<div className={cartClass}>
					<header>
						<button className="cart-close" onClick={this.props.onCartClose.bind(this)}><i className="fa fa-close"></i></button>
					</header>
					<article>
						<CartList selectedProducts={this.props.selectedProducts}></CartList>
					</article>
					<footer>
						<button className="btn btn-primary btn-block">Checkout</button>
					</footer>
				</div>
				<div className={cartOverlayClass}></div>
			</React.Fragment>
		);
	}
}

export default Cart;