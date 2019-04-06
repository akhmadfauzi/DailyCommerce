import React, { Component } from 'react';
import './styles/dist/App.css';
import ProductList from './components/ProductList';
import Navigation from './components/Navigation';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Modal from './components/ui/Modal';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import Footer from './components/ui/Footer';

var productLink = 'https://api.jsonbin.io/b/5c8f06732d33133c40155809/9';
var key = '$2a$10$Sv7oWDHBiXDaUnQ26ruN7.mxTX1YNwHa1n2pRqsuBmZ1FEqkm40bK';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			'products': null,
			'openCart': false,
			'cart':[],
			'productDetail': null,
			'openProduct':false,
			'cartSlide':false,
			'imageLoaded': false,
			'filteredProducts': null,
			'pageCount': 0,
			'modalIn':false,
			'itemPerPage': 16,
			'currentPage': 1
			
		};
		this.getProducts = this.getProducts.bind(this);
		this.onProductClickHandler = this.onProductClickHandler.bind(this);
		this.onBackdropClickHandler = this.onBackdropClickHandler.bind(this);
		this.addToCartHandler = this.addToCartHandler.bind(this);
		this.onSearchHandler = this.onSearchHandler.bind(this);
		this.onCartItemDelete = this.onCartItemDelete.bind(this);
		this.onQuantityChangeHandler = this.onQuantityChangeHandler.bind(this);
	}

	componentDidMount() {
		this.getProducts();
	}



	

	onSearchHandler(e){
		let target = e.target;
		let key = e.which;
		
		if(key === 13){
			
			const value = target.value
			const filtered = this.findProductByQuery(value);
			const productsLen = filtered.length ? filtered.length : this.state.products.length;
			const pageCount = filtered.length ? Math.ceil(Math.floor(productsLen/this.state.itemPerPage)) : 0;
			console.log(filtered.length);
			if(value){
				this.setState({
					'filteredProducts':filtered,
					'pageCount': pageCount
				});
			}else{
				this.setState({'filteredProducts': null,
				'pageCount': pageCount});
			}
			
		}
	}

	getProducts() {
		let self = this;
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
				console.log('Success');
				// self.setState({ 'products': products });
				localStorage.setItem('products', JSON.stringify(products));
				let pageCount = Math.ceil(Math.floor(products.length/self.state.itemPerPage));
				self.setState({
					'products':products,
					'pageCount': pageCount
				});
				
			});
		}else{
			let products = JSON.parse(localStore);
			let pageCount = Math.ceil(Math.floor(products.length/self.state.itemPerPage));
			
			self.setState({
				'products':products,
				'pageCount': pageCount
			});
			
		}
	}

	addToCartHandler(item){
		let temp=[];
		let currentCart = this.state.cart;
		var selectedProduct = this.findProductById(item);
		let product = {
			'id':selectedProduct.id,
			'name':selectedProduct.name,
			'quantity':1,
			'availableQuantity':selectedProduct.quantity,
			'price':selectedProduct.price,
		};

		if(!currentCart.length){
			temp.push(product);			
			this.setState({'cart': temp});
		}else{
			if(this.hasItem(product.id)){
				currentCart = this.updateExistingCartItem(currentCart, product.id);
			}else{
				currentCart.push(product);
			}
			this.setState({'cart': currentCart});		
		}
	}

	hasItem(id){
		let cart = this.state.cart;
		for (let i = 0; i < cart.length; i++) {
			if(cart[i].id === id){
				return true;
			}			
		}
		return false;
	}

	updateExistingCartItem(cart, id, value = 1){
		
		for (let i = 0; i < cart.length; i++) {
			if(cart[i].id === id){
				let currentQty = cart[i].availableQuantity;
				cart[i].quantity += (cart[i].quantity + value > currentQty ? 0 : value);
				return cart;
			}			
		}

		return false;
		
	}

	findProductByQuery(query){
		let products = this.state.products;
		let filtered = [];
		if(query){
			for (let i = 0; i < products.length; i++) {
				let reg = RegExp(query,'gi');
				if((products[i].name).match(reg)){
					filtered.push(products[i]);
				}
			}
		}
		return filtered;
	}

	findProductById(id){
		var products = this.state.products;
		for (let i = 0; i < products.length; i++) {
			if(products[i].id === id){
				return products[i];
			}
		}
		return null;
	}		

	onCartMenuClickHandler(e){
		e.preventDefault();
		let target = e.target;
		if(target.dataset.cartNav === 'open'){
			this.setState({'openCart':true});
			document.body.className = 'modal-open';
			setTimeout((self)=>{
				self.setState({'cartSlide':true});
			},150,this);		
		}else{
			this.setState({'openCart':false,'cartSlide':false});
			document.body.className = '';
			
		}
	}

	onProductClickHandler(e){
		e.preventDefault();
		let target = e.target;
		let data = target.dataset;
		let product = this.findProductById(data.id);
		this.setState({'openProduct':true,'productDetail':product});
		document.body.className = 'modal-open';
		setTimeout((self)=>{
			self.setState({'modalIn':true});
		},300,this);
	}	

	onBackdropClickHandler(e){
		let target = e.target;
		let role = target.getAttribute('role');
		if(role === 'dialog' || role === 'overlay'){
			this.setState({
				'openProduct':false,
				'openCart':false,
				'cartSlide':false,
				'imageLoaded':false,
				'modalIn':false,
			});
			document.body.className = '';
		}
	}

	checkImageHandler(e){
		if(e.target.src){
			this.setState({'imageLoaded':true});
		}else{
			console.log('wait a moment');
		}
	}

	_getDetails(bool){
		if(bool){
			return (
			<Modal onOverlayClick={this.onBackdropClickHandler} slideIn={this.state.modalIn} image="false">
				<ProductDetails 
					imageLoaded={this.state.imageLoaded} 
					checkImage={this.checkImageHandler.bind(this)} 
					overlayClick={this.onBackdropClickHandler} 
					openProduct={this.state.openProduct} 
					product={this.state.productDetail}
					addToCart={this.addToCartHandler}>
				</ProductDetails>
			</Modal>);
		}else{
			return '';
		}

	}
	getCartItemById(id){
		var products = this.state.cart;
		for (let i = 0; i < products.length; i++) {
			if(products[i].id === id){
				return products[i];
			}
		}
		return null;
	}

	updateCartItem(product){
		var products = this.state.cart;
		for (let i = 0; i < products.length; i++) {
			if(products[i].id === product.id){
				products[i] = product;
			}
		}

		this.setState({'cart':products});
		
	}
	onCartItemDelete(e){
		let target = e.target;
		let id = target.dataset.id;
		let cart = this.state.cart;
		cart = cart.filter( item => item.id !== id);
		this.setState({'cart':cart});
	}

	onQuantityChangeHandler(e){
		let target = e.target;
		let id = target.dataset.id;
		let value = parseInt(target.value);
		let currentCart = this.state.cart;
		if(this.hasItem(id)){
			let product = this.getCartItemById(id);
			console.log(product);
			product.quantity = value < 1 ? 1 : (value > product.availableQuantity ? product.availableQuantity : value);
			this.updateCartItem(product);			
		}
		this.setState({'cart': currentCart});	
	}

	onPageChangeHandler(e){
		const target = e.target;
		const pageNumber = parseInt(target.dataset.pageNumber);
		this.setState({
			'currentPage': pageNumber
		});		
	}



	render() {
		let products = this.state.filteredProducts ? this.state.filteredProducts : (this.state.products ? this.state.products : null);
		if (!products) {
			return (
				<div className="App">
					Loading...
				</div>
			);
		} else {
			const isDetail = this.state.openProduct ? true : false;
			const detail = this._getDetails(isDetail);
			
			let cart = this.state.openCart ? (
				<Cart 
					cart={this.state.cart}
					onCartClose={this.onCartMenuClickHandler.bind(this)} 
					openCart={this.state.openCart}
					overlayClick={this.onBackdropClickHandler}
					cartSlide={this.state.cartSlide}
					onQuantityChange={this.onQuantityChangeHandler}
					itemDelete={this.onCartItemDelete}>
				</Cart>
			) : '';

			return (
				<React.Fragment>
					<Navigation onCartClickMenu={this.onCartMenuClickHandler.bind(this)} cart={this.state.cart}></Navigation>
					{cart}
					<div className="App">
						<SearchBar onSearch={this.onSearchHandler}></SearchBar>
						<ProductList 
							products={products} 
							addToCart={this.addToCartHandler}
							onProductClick={this.onProductClickHandler}
							itemPerPage={this.state.itemPerPage}
							currentPage={this.state.currentPage}>
						</ProductList>
					</div>
					<Pagination 
						perpage="8" 
						adjacent="3" 
						totalPages={this.state.pageCount} 
						currentPage={this.state.currentPage} 
						onPageChange={this.onPageChangeHandler.bind(this)}>
					</Pagination>
					{detail}
					<Footer>
						
					</Footer>
				</React.Fragment>
			);
		}

	}
}

export default App;

