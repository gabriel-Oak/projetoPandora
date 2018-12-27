import React, { Component, } from 'react';
import Header from './corpo/Header';
import Main from './corpo/Main';

class Corpo extends Component {
    
    render() {
        return (
            <div className="corpo">
            	<Header />
            	<Main />
            </div>
        );
    }
}

export default Corpo;
