import React, { Component, } from 'react';

class Menu extends Component {
   
    render() {
        return (
            <div className="menu">
            	<img src={process.env.PUBLIC_URL + "/img/logo-branco-minor.png"} />
            	
            	<div className="navs">
            		<a href="#" className="mlink">Link 1</a>
            		<a href="#" className="mlink">Link 2</a>
            		<a href="#" className="mlink">Link 3</a>
            		<a href="#" className="mlink">Link 4</a>
            	</div>
            </div>
        );
    }
}

export default Menu;
