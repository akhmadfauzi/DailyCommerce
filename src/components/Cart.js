import React, { Component } from 'react';
import CartList from './CartList';
import Overlay from './Overlay';


class Cart extends Component {
	
	render() {
		let cartClass = this.props.openCart ? (this.props.cartSlide ? 'cart cart-show cart-in' : 'cart cart-show') : 'cart';
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
						<button className="button button-primary button-block button-checkout">Checkout</button>
					</footer>
				</div>
				<Overlay overlayClass={cartOverlayClass} overlayClick={this.props.overlayClick}></Overlay>
			</React.Fragment>
		);
	}
}

export default Cart;