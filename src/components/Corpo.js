import React, { Component, } from 'react';
import Header from './corpo/Header';
import Main from './corpo/Main';
import HeaderDesk from './corpo/HeaderDesk';


import MediaQuery from 'react-responsive';

class Corpo extends Component {
    
    render() {
        return (
            <div className="corpo">
				<div id="inicio">
				<MediaQuery maxWidth={859}>
				  <Header />
				</MediaQuery>

				<MediaQuery minWidth={860}>
				  <HeaderDesk />
				</MediaQuery>
            	</div>

            	<Main />
            </div>
        );
    }
}

export default Corpo;
