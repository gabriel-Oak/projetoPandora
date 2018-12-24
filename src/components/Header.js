import React, { Component } from 'react';

class Header extends Component {
   

    render() {
        return (
            <div className="header">
            	<picture>
            		<source media="(max-width: 480px)" srcSet={process.env.PUBLIC_URL + "/img/logo-p.png"}/>
            		<img src={process.env.PUBLIC_URL + "/img/logo-g.png"} alt="Logomarca"/>
            	</picture>
            </div>
        );
    }
}

export default Header;
