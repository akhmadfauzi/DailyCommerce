import React, { Component } from 'react';
import Pos from './Pos';
import Inventory from './Inventory';

class Content extends Component {
	showContent(param){
		param = param.slice(1);
		console.log(param, (param === 'Pos'), param === 'Inventory');
		if(param === 'Pos'){
			return <Pos></Pos>;
		}
		if(param === 'Inventory'){
			return <Inventory></Inventory>;
		}
		
	}
	render() {
		let show = this.props.show ? 'content content-show' : 'content';
		let modalOverlay = this.props.show ? 'overlay modal-overlay' : 'overlay';
		let content = this.showContent(this.props.main);
		return (
			
				<React.Fragment>
					<div className={show}>
						<div className="content-header">
						header
						</div>
						<div className="content-body">
							{content}
						</div>
						<div className="content-footer">
							footer
						</div>
					</div>
					<div className={modalOverlay}></div>
				</React.Fragment>
				
			
		);
	}
}

export default Content;