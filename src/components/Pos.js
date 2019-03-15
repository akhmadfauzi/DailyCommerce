import React, { Component } from 'react';

class Pos extends Component {
	render() {
		return (
			<div className="pos-content">
				<div className="left pos-calculator">
					<div className="head left-head">
						<input type="text" placeholder="Find products"/>
						<input type="text" placeholder="Find products"/>
					</div>
					<div className="body">
					 <table className="pos-cart">
						 <thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Qty</th>
								<th>Subtotal</th>
								<th>Delete</th>
							</tr>
						 </thead>
						 <tbody>
						 <tr>
								<th>Product</th>
								<th>Price</th>
								<th>Qty</th>
								<th>Subtotal</th>
								<th>Delete</th>
							</tr>
						 </tbody>
					 </table>
					</div>
					<div className="footer"></div>
				</div> 
				<div className="right products-list">
					product list
				</div>				
			</div>
		);
	}
}

export default Pos;