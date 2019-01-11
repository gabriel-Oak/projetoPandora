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
		           Um pouco sobre nos...
		        </Typography>
		        </div>
		        
		        <div className="textoEsquerda">
		        <Typography variant="h5" color="inherit" gutterBottom>
		          <p>Um texto enorme contando sobre a historia
		          		da agência,  como ela surgiu, de onde
		          		veio a iniciativa, e sobre o processo 
		          		de encubação, posteriormente essa seção
		          		pode ser espandida para abranger melhor
		          		a tragetoria da empresa.</p>
		          <p>Vale a pena ja falar sobre os objetivos
		          		nessa seção também, qual nossa meta
		          		para com o cliente, nosa visão (onde
		          		queremos chegar), e nossos valores.</p>
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
