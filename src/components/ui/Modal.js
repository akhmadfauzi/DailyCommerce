import React, { Component } from 'react';
import '../../styles/dist/modal.css';

class Modal extends Component {

	_modalClick(e){
		
	}
	render() {
		const theClass = this.props.slideIn ? 'modal-dialog in': 'modal-dialog';
		const productDetails = (
			<div className={theClass}>
						<div className="modal-content">
							<div className="modal-header"><span onClick={this.props.onOverlayClick} role="dialog" className="button-modal-close"><i className="fa fa-close"></i></span></div>
							<div className="modal-body">
								{this.props.children}
							</div>
							<div className="modal-footer">Footer</div>
						</div>
					</div>
		);

		const imageDetails = (
			<img src="https://d28niecfu6trh0.cloudfront.net/a7b62af586b81b113a0490c457a6b357.jpg" alt="placeholder"/>
		);
		const theContent = (this.props.image === 'true') ? imageDetails : productDetails;
		return (
			<React.Fragment>
				<div className="modal" id="myModal" onClick={this.props.onOverlayClick} role="dialog">
					{theContent}
				</div>
				<div className="modal-backdrop"></div>
			</React.Fragment>
			
		);
	}
}

export default Modal;