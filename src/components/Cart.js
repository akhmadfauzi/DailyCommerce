import React, { Component } from 'react';
import '../styles/dist/cart.css';
import CartList from './CartList';
import Overlay from './Overlay';


class Cart extends Component {
	subTotal(){
		let grandTotal = 0;
		let cart = this.props.cart;
		for (let i = 0; i < cart.length; i++) {
			let totalPrice = cart[i].price * cart[i].quantity;
			grandTotal += totalPrice;			
		}

		return Math.fround(grandTotal).toFixed(2);
	}

	render() {
		let cartClass = this.props.openCart ? (this.props.cartSlide ? 'cart cart-show cart-in' : 'cart cart-show') : 'cart';
		const cartOverlayClass = this.props.openCart ? 'cart-overlay cart-overlay-show' : 'cart-overlay';
		const subTotal = this.subTotal();
		const cartList = this.props.cart.length ? (<CartList itemDelete={this.props.itemDelete} cart={this.props.cart}></CartList>):<div className="empty-cart"><span><i className="fa fa-shopping-cart"></i></span></div>;
		return (
			<React.Fragment>
				<div className={cartClass}>
					<header>
						<button className="cart-close" onClick={this.props.onCartClose.bind(this)}><i className="fa fa-close"></i></button>
					</header>
					<article>
						{cartList}
					</article>
					<footer>
						<div className="grand-total">Subtotal : ${subTotal}</div>
						<button className="button button-primary button-block button-checkout">Checkout</button>
					</footer>
				</div>
				<Overlay overlayClass={cartOverlayClass} overlayClick={this.props.overlayClick}></Overlay>
			</React.Fragment>
		);
	}
}

export default Cart;