import React, { Component } from 'react';

class Button extends Component {
	constructor(props){
		super(props);
		this.clickHandler = this.clickHandler.bind(this)	
	}
	clickHandler(e){
		this.props.clickHandler(this.props.route);
	}
	render() {
		let content = this.props.children;
		return (
			<div className='button button-default' onClick={this.clickHandler}>
				{content}
			</div>
		);
	}
}

export default Button;