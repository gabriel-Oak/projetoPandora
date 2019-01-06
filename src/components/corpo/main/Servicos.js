import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Servicos extends Component {
    

    render() {
        return (
            <div id="servicos" style={this.props.styles.Divs}>
            	<div className="titulo">
            	<Typography style={this.props.styles.Typography} component="h2" variant="display3" color="inherit">
		           Fazemos por você
		        </Typography>
		        </div>

		        <div className="textoDireita">
		        <Typography variant="h5" color="inherit" gutterBottom>
		          <p>
		          	Aqui na Pandora somos apaixonados por
		          	desafios, e pelo que fazemos. Gostamos
		          	de ver os resultados transformando a vida
		          	de nossos clientes.
		          </p>
		        </Typography>
            	</div>
            </div>
        );
    }
}

export default Servicos;
