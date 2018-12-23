import React, { Component, } from 'react';

class Menu extends Component {
   
    render() {
        return (
            <div className="menu">
            	<img src={process.env.PUBLIC_URL + "/img/logo-branco-minor.png"} />
            	
            </div>
        );
    }
}

export default Menu;
