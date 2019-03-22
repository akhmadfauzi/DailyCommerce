import React, { Component } from 'react';
import Overlay from './Overlay';

class ProductDetails extends Component {
	checkImage(e){
		let target =e.target;
		
	}	

	componentDidMount(){
		let image = new Image();
		image.src = this.props.product.image;
		image.onloadedmetadata = this.props.checkImage;
	}

	render() {
		const product = this.props.product;
		const desc = {'__html': product.description};
		const isImageready = this.props.imageLoaded;
		if(!isImageready){
			return (
				<React.Fragment>
					<div className="loading-background"><img src="./loading.gif" className="loading" /></div>
					<img src={product.image} alt={product.name} onLoad={this.props.checkImage}/>
					<Overlay overlayClick={this.props.overlayClick} overlayClass={this.props.openProduct}></Overlay>
				</React.Fragment>
			)
		}else{
			return (
				<React.Fragment>
					<div className="product-details">
						<div className="detail-body">
							<div className="product-images">
								<img src={product.image} alt={product.name} onLoad={this.props.checkImage}/>
							</div>
							<div className="call-to-action">
								<h1 className="title">{product.name}</h1>
								<p> <span className="product-price">$ {product.price}</span> <span className="product-unit">/{product.unit}</span></p>
								<button className="button button-primary button-block">Add to cart</button>
							</div>
							<p style={{clear:'both','margin':0,'padding':0}}>&nbsp;</p>
							<div className="description">
								<h3>Description</h3>
								<div dangerouslySetInnerHTML={desc}></div>
							</div>
						</div>
					</div>
					<Overlay overlayClick={this.props.overlayClick} overlayClass={this.props.openProduct}></Overlay>
				</React.Fragment>
			);
		}
		
		
	}
}

export default ProductDetails;