import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
	Img: {
		width: "100%",
		zIndex: 0
	},


}

class HeaderDesk extends Component {
  

    render() {
        return (
            <div className="header" >
            	<picture>
            		<div className="headertxt">
            			<h1 >
					        Aqui seu sonho ganha força
					    </h1>
					    <h2 >
					        Independente se ele é considerado
					        maluco, diferente, inovador, ou
					        um negocio tradicional, que vai ser
					        seu foguete para o sucesso, acreditamos
					        nele e queremos te ajudar a chegar la...
					    </h2>
					</div>
            		<img src={process.env.PUBLIC_URL + "/img/Watching-the-Stars.png"} style={styles.Img}/>
            	</picture>
            </div>
        );
    }
}

export default HeaderDesk;
