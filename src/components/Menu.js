import React, { Component, } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Menu extends Component {
   
    render() {
        return (
            <div className="menu">
            	<img src={process.env.PUBLIC_URL + "/img/logo-branco-minor.png"} />
            	
            	<div className="navs">
            		<AnchorLink href='#inicio' className="mlink">Inicio</AnchorLink>
            		<a href="#" className="mlink">Link 2</a>
            		<a href="#" className="mlink">Link 3</a>
            		<a href="#" className="mlink">Link 4</a>
            	</div>
            </div>
        );
    }
}

export default Menu;
