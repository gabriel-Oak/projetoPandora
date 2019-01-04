import React, { Component, } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Menu extends Component {
   
    render() {
        return (
            <div className="menu">
            	<img src={process.env.PUBLIC_URL + "/img/logo-branco-minor.png"} />
            	
            	<div className="navs">
            		<AnchorLink href='#inicio' className="mlink">Inicio</AnchorLink>
            		<AnchorLink href='#sobre' offset={() => 100} className="mlink">Sobre Nos</AnchorLink>
            		<a href="#" className="mlink">Link 3</a>
            		<AnchorLink href="#contato" offset={() => 100} className="mlink">Contato</AnchorLink>
            	</div>
            </div>
        );
    }
}

export default Menu;
