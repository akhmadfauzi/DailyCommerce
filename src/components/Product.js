import React, { Component } from 'react';

class Product extends Component {

	cartBtnHandler(e){
		var id = e.target.dataset.id;
		this.props.addToCart(id);
	}

	render() {
		const detail = this.props.detail;
		const slug = detail.name.replace(/\s/i,'-').toLowerCase();
		const productLink = '/product/'+ slug;
		const details = (
			<div className="item" >
				{/* <div><img className="image" src={detail.image} alt={detail.name}/></div> */}
				<div className="image"></div>
				<div className="name"><a href={productLink} onClick={this.props.onProductClick} alt={detail.name} title={detail.name} data-id={detail.id}>{detail.name}</a></div>
					<div className="price">{detail.price}/{detail.unit}</div>				
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