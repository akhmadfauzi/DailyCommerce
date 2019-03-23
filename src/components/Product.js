import React, { Component } from 'react';

class Product extends Component {

	cartBtnHandler(e){
		var id = e.target.dataset.id;
		this.props.addToCart(id);
	}

	checkLoadedImage(e){
		if(e.target.src){
			
		}
	}

	render() {
		const detail = this.props.detail;
		const slug = detail.name.replace(/\s/i,'-').toLowerCase();
		const productLink = '/product/'+ slug;
		const details = (
			<div className="item" >
				{/* <div><img className="image" data-id={detail.id} onClick={this.props.onProductClick} src={detail.image} alt={detail.name} onLoad={this.checkLoadedImage.bind(this)}/></div> */}
				<div className="image" data-id={detail.id} onClick={this.props.onProductClick}></div>
				<div className="name"><a href={productLink} onClick={this.props.onProductClick} alt={detail.name} title={detail.name} data-id={detail.id}>{detail.name}</a></div>
					<div className="price"><span>{detail.price}</span> <span>/{detail.unit}</span></div>				
					<button className="button button-primary button-block" data-id={detail.id} onClick={this.cartBtnHandler.bind(this)}>Add to cart</button>
			</div>
		)
		return (
			<React.Fragment>
				{details}
			</React.Fragment>
		);
	}
}

export default Product;