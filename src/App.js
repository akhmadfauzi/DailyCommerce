import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';

var productLink = 'https://api.jsonbin.io/b/5c8f06732d33133c40155809/9';
var key = '$2a$10$Sv7oWDHBiXDaUnQ26ruN7.mxTX1YNwHa1n2pRqsuBmZ1FEqkm40bK';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { 'products': null };
		this.getProducts(this.state);
	}

	componentDidMount() {
	}

	getProducts(state) {
		var localStore = localStorage.getItem('products');
		if(!localStore){
			fetch(productLink, {
				'headers': {
					'secret-key': key
				}
			})
			.then(function (response) {
				if (response.status !== 200) {
					console.log('load fails');
					return false;
				}
				return response.json();
			})
			.then(function (products) {
				state.products = products;
				// self.setState({ 'products': products });
				localStorage.setItem('products', JSON.stringify(products));
			});
		}else{
			state.products = JSON.parse(localStore).slice(0,8);
			// self.setState({ 'products': JSON.parse(localStore) });
		}
		
	}

	addToCartHandler(item){
		var product = this.findById(item);
		alert(product.price)
	}

	findById(id){
		var products = this.state.products;
		for (let i = 0; i < products.length; i++) {
			if(products[i].id == id){
				return products[i];
			}
		}

		return null;
	}		
	

	render() {
		let products = this.state.products ? this.state.products : null;
		if (!products) {
			return (
				<div className="App">
					Loading...
				</div>
			);
		} else {
			return (
				<div className="App">
					<ProductList 
						products={products} 
						addToCart={this.addToCartHandler.bind(this)}>
					</ProductList>
				</div>
			);
		}

	}
}

export default App;

