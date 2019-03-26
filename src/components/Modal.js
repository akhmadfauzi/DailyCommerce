import React, { Component } from 'react';
import '../styles/dist/modal.css';

class Modal extends Component {

	_modalClick(e){
		
	}
	render() {
		const theClass = this.props.slideIn ? 'modal-dialog in': 'modal-dialog';
		return (
			<React.Fragment>
				<div className="modal" id="myModal" onClick={this.props.onOverlayClick} role="dialog">
					<div className={theClass}>
						<div className="modal-content">
							<div className="modal-header"><span onClick={this.props.onOverlayClick} role="dialog" className="button-modal-close"><i className="fa fa-close"></i></span></div>
							<div className="modal-body">
								{this.props.children}
							</div>
							<div className="modal-footer">Footer</div>
						</div>
					</div>
				</div>
				<div className="modal-backdrop"></div>
			</React.Fragment>
			
		);
	}
}

export default Modal;