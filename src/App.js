import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Content from './components/Content';

class App extends Component {
	constructor(props){
		super(props)
		this.btnClickHandler = this.btnClickHandler.bind(this);
		this.state = {
			route: null
		}
	}
	btnClickHandler(e) {
		this.setState({
			'route': e,
			'active' : true
		});
		
	}
	render() {
		const content = this.state.route ? this.state.route : 'Dashboard';
		const isActive = this.state.active ? true : false;
		return (
			<div className="App">
				<h1>posm8</h1>
				<p>A super simple point of sale system</p>
				<header>
					<Button route="/Pos" clickHandler={this.btnClickHandler}> Pos </Button>
					<Button route="/Inventory" clickHandler={this.btnClickHandler}> Inventory </Button>
					<Button route="/Transaction" clickHandler={this.btnClickHandler}> Transaction </Button>
				</header>
				<article>
					<Content show={isActive} main={content}></Content>
				</article>
			</div>
		);
	}
}

export default App;
