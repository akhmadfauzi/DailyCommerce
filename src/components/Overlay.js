import React, { Component } from 'react';

class Overlay extends Component {
	render() {
		const overlayClass = this.props.overlayClass ? 'cart-overlay cart-overlay-show' : 'cart-overlay';

		return (
				<div className={overlayClass} onClick={this.props.overlayClick} role="overlay"></div>
		);
	}
}

export default Overlay;