import React, { Component } from 'react';
import Overlay from './Overlay';

class ProductDetails extends Component {

	cartBtnHandler(e){
		var id = e.target.dataset.id;
		this.props.addToCart(id);
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
					<div className="loading-background"><img src="./loading.gif" className="loading" alt="loading..." /></div>
					<img src={product.image} alt={product.name} onLoad={this.props.checkImage}/>
					<Overlay overlayClick={this.props.overlayClick} overlayClass={this.props.openProduct}></Overlay>
				</React.Fragment>
			)
		}else{
			return (
				<React.Fragment>
					<div className="product-details">
						<div className="detail-body">
							<div className="button-modal-close" onClick={this.props.overlayClick}><i className="fa fa-times"></i></div>
							<div className="product-images">
								<img src={product.image} alt={product.name} onLoad={this.props.checkImage}/>
							</div>
							<div className="call-to-action">
								<h1 className="title">{product.name}</h1>
								<p> <span className="product-price">$ {product.price}</span> <span className="product-unit">/{product.unit}</span></p>
								<button className="button button-primary button-block" onClick={this.cartBtnHandler.bind(this)} data-id={product.id}>Add to cart</button>
							</div>
							<p style={{clear:'both','margin':0,'padding':0}}>&nbsp;</p>
							<div className="description">
								<div className="header">Description</div>
								<div className="body" dangerouslySetInnerHTML={desc}></div>
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