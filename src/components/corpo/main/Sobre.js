import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ArrowNavs from './../../small/ArrowNavs';



class Sobre extends Component {
    

    render() {
        return (
            <div id="sobre" style={this.props.styles.Divs}>
            	
	            <div style={{"margin-bottom":"50px"}}>
	            	<ArrowNavs direction={"top"} 
	                               link={"#servicos"}
	                               offset={'25'}/>
            	</div>

            	<div className="titulo">
            	<Typography style={this.props.styles.Typography} component="h2" variant="display3" color="inherit">
		           Um pouco sobre nós...
		        </Typography>
		        </div>
		        
		        <div className="textoEsquerda">
		        <Typography variant="h5" color="inherit" gutterBottom>
		          <p>Nossa agência nasceu do amor e 
			          proposito que havia dentro da gente. 
			          Estudantes de computação totalmente 
			          apaixonados pelo marketing, ajudando 
			          pessoas próximas com isso viamos cada 
			          vez mais esse amor crescer e vimos a 
			          possibilidade de ajudar cada vez mais 
			          pessoas a crescerem através do marketing 
			          digital, social media e etc. E isso 
			          nos empolgou porque entre nossos 
			          valores está o comprometimento, 
			          produtividade, étic
			          a sempre levando a resultados, 
			          crescimento e sucesso dos nossos 
			          clientes.</p>
		          <p>Temos uma missão e não vamos parar 
			          até vocês, nossos clientes, a atingirem. 
			          Somos comprometidos com conteúdos para 
			          alavancar e posicionar sua marca nas 
			          redes sociais com engajamento 
			          profissional, seja você um empreendedor 
			          ou influenciador digital, vamos dar 
			          a visibilidade na internet que você m
			          erece.</p>
		        </Typography>
            	</div>

            	<div style={{"margin-top":"50px"}}>
	            	<ArrowNavs direction={"bot"} 
	                               link={"#contato"}
	                               offset={'70'}/>
            	</div>
            </div>
        );
    }
}

export default Sobre;
