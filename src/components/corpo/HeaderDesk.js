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
					        Conosco seu sonho ganha força
					    </h1>
					    <h2 >
					        Independente se ele é considerado maluco, diferente, inovador, ou um negócio tradicional,  transformamos ele em seu foguete para o sucesso, acreditamos nele e vamos te ajudar a chegar lá...
					    </h2>

					</div>
            		<img src={process.env.PUBLIC_URL + "/img/Watching-the-Stars.png"} style={styles.Img}/>
            	</picture>
            </div>
        );
    }
}

export default HeaderDesk;
