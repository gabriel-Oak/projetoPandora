import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ArrowNavs from './../small/ArrowNavs';

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
                <div style={{"margin-top":"-150px"}}>
                    <ArrowNavs direction={"bot"} 
                               link={"#servicos"}
                               offset={'25'}/>
                </div>
            </div>
        );
    }
}

export default HeaderDesk;
