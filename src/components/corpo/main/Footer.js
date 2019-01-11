import React, { Component } from 'react';

class Footer extends Component {


    render() {
        return (
            <div className="footer" style={{'flex-direction': 'row', 'display': 'flex'}}>
            	
            	<div className="left">
            		
                		<img src={process.env.PUBLIC_URL + "/img/logo-g.png"} alt="Logomarca"/>
            	</div>

            	<div className="right" style={{'flex-direction': 'row', 'display': 'flex'}}>
	            	<h3> Vem com a gente </h3>
	            	
	            	<a href="https://www.facebook.com/" target="_blank">
	            	<picture>
	            		<source media="(max-width: 859)" srcSet={process.env.PUBLIC_URL + "/img/face-sm.png"}/>
	            		<img src={process.env.PUBLIC_URL + "/img/face-md.png"} alt="Facebook"/>
	            	</picture>
	            	</a>

	            	<a href="https://www.instagram.com/" target="_blank">
	            	<picture>
	            		<source media="(max-width: 859)" srcSet={process.env.PUBLIC_URL + "/img/instagram-sm.png"}/>
	            		<img src={process.env.PUBLIC_URL + "/img/instagram-md.png"} alt="Instagram"/>
	            	</picture>
	            	</a>
            	</div>
            </div>
        );
    }
}

export default Footer;
