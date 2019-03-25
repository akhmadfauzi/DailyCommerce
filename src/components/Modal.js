import React, { Component } from 'react';

class Modal extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="modal" id="myModal" onClick={this.modalClick.bind(this)} role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">Title</div>
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