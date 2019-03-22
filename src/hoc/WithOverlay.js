import React, { Component } from 'react'
import Overlay from '../components/Overlay';

function WithOverlay(wrappedComponent){
    return class extends Component{
        render() {
            return (
                <React.Fragment>
                    <wrappedComponent {...this.props}></wrappedComponent>
                    <Overlay overlayClick={this.props.overlayClick} overlayClass={this.props.openProduct}></Overlay>
                </React.Fragment>
            );
        }
    }
}
export default WithOverlay;
// export default class WithOverlay extends Component {
  
// }
