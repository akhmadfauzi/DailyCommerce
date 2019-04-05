import React, { Component } from 'react';
import Product from './Product';
import NotFound from './ui/NotFound';

class ProductList extends Component {

	componentDidMount(){
		this.lazyImages();

	}

	componentDidUpdate(){
		this.lazyImages();
	}

	lazyImages(){
		var images = document.querySelectorAll('.lazy-image');
		if(images.length){
			window.addEventListener('DOMContentLoaded', this.loadLazyImage);
			window.addEventListener('scroll', this.loadLazyImage);
			window.addEventListener('resize', this.loadLazyImage);
			window.addEventListener('mouseover', this.loadLazyImage);
		}else{
			window.removeEventListener('DOMContentLoaded', this.loadLazyImage);
			window.removeEventListener('scroll', this.loadLazyImage);
			window.removeEventListener('resize', this.loadLazyImage);
			window.removeEventListener('mouseover', this.loadLazyImage);
		}
	}

	loadLazyImage(){
		var images = document.querySelectorAll('.lazy-image');
		if(images.length){
			console.log('called');
			images.forEach(element => {
				setTimeout(()=>{
					if(element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().top > 0){
						var image = new Image();
						image.style.display = 'none';
						image.src = element.dataset.src;
						image.onload = function(e){
							element.className = 'image';
							element.src = element.dataset.src;
						}
					}
				},250);
			});
		}
	}
	renderProducts(e){
		return (
			<Product 
				key={e.id} 
				detail={e} 
				addToCart={this.props.addToCart} 
				onProductClick={this.props.onProductClick}>
			</Product>
		);
	}
	render() {
		const startIndex = this.props.currentPage > 1 ? (this.props.currentPage * this.props.itemPerPage) : 0;
		const products = this.props.products.slice(startIndex,startIndex+this.props.itemPerPage).map(this.renderProducts.bind(this));
		const notFound = <NotFound></NotFound>;
		const result = products.length ? products : notFound;
		return (
			<React.Fragment>
				{result}
			</React.Fragment>
		);
	}
}

export default ProductList;