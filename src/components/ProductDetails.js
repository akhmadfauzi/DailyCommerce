import React, { Component } from 'react';
import Overlay from './Overlay';
class ProductDetails extends Component {
	render() {
		return (
			<React.Fragment>
				<Overlay overlayClass={this.props.openProduct}></Overlay>
			</React.Fragment>
		);
	}
}

export default ProductDetails;