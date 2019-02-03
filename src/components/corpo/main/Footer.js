import React, { Component } from 'react';

class Footer extends Component {


    render() {
        return (
            <div className="footer">
            	
            	<div className="left">
            		
                		<img src={process.env.PUBLIC_URL + "/img/logo-g.png"} alt="Logomarca"/>
            	</div>

            	<div className="right">
	            	<div className="textoF">
	            	<h3> Vem com a gente </h3>
	            	</div>
	            	<div className="imagesF">
	            	<a href="https://www.facebook.com/agenciapandoramarketing/" target="_blank">
	            	<picture>
	            		<source media="(max-width: 859)" srcSet={process.env.PUBLIC_URL + "/img/face-sm.png"}/>
	            		<img src={process.env.PUBLIC_URL + "/img/face-md.png"} alt="Facebook"/>
	            	</picture>
	            	</a>

	            	<a href="https://www.instagram.com/agenciapandora/" target="_blank">
	            	<picture>
	            		<source media="(max-width: 859)" srcSet={process.env.PUBLIC_URL + "/img/instagram-sm.png"}/>
	            		<img src={process.env.PUBLIC_URL + "/img/instagram-md.png"} alt="Instagram"/>
	            	</picture>
	            	</a>

	            	<a href="https://api.whatsapp.com/send?phone=5516993566030&text=Oi%20seja%20bem%20vindo%20ao%20whatsapp%20da%20Agencia%20Pandora" target="_blank">
	            	<picture>
	            		<img src={process.env.PUBLIC_URL + "/img/whats.png"} alt="Whatsapp"/>
	            	</picture>
	            	</a>

	            	
	            	</div>
            	</div>
            </div>
        );
    }
}

export default Footer;
