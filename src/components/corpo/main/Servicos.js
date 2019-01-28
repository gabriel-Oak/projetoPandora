import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ArrowNavs from './../../small/ArrowNavs';
class Servicos extends Component {
    

    render() {
        return (
            <div id="servicos" style={this.props.styles.Divs}>
	            <div style={{"margin-bottom":"50px"}}>
	            	<ArrowNavs direction={"top"} 
	                               link={"#inicio"}
	                               offset={'0'}/>
            	</div>
            	<div className="titulo">
            	<Typography style={this.props.styles.Typography} component="h2" variant="display3" color="inherit">
		           Fazemos por você
		        </Typography>
		        </div>

		        <div className="textoDireita">
		        <Typography variant="h5" color="inherit" gutterBottom>
		          <p>
		          	Somos movidos por desafios, e entregar resultados
		          	positivos aos nossos clientes nos alimenta.
		          	Cuidamos de social media, consultoria de e-commerce,
		          	e Web Designer.
		          </p>
		        </Typography>
            	</div>

            	<div className="vantagens">
            		<div className="vantagensItem">
            			<div className="vantagensItemT">
            				Titulo
            			</div>
            			<div className="vantagensItemt">
            				<ul>
            					<li> Item 1 </li>
            					<li> Item 2 </li>
            					<li> Item 3 </li>
            					<li> Item 4 </li>
            				</ul>
            			</div>
            		</div>

            		<div className="vantagensItem">
            			<div className="vantagensItemT">
            				Titulo
            			</div>
            			<div className="vantagensItemt">
            				<ul>
            					<li> Item 1 </li>
            					<li> Item 2 </li>
            					<li> Item 3 </li>
            					<li> Item 4 </li>
            				</ul>
            			</div>
            		</div>

            		<div className="vantagensItem">
            			<div className="vantagensItemT">
            				Titulo
            			</div>
            			<div className="vantagensItemt">
            				<ul>
            					<li> Item 1 </li>
            					<li> Item 2 </li>
            					<li> Item 3 </li>
            					<li> Item 4 </li>
            				</ul>
            			</div>

            	</div>
            </div>
            	<div style={{"margin-top":"50px"}}>
	            	<ArrowNavs direction={"bot"} 
	                               link={"#sobre"}
	                               offset={'25'}/>
            	</div>
            </div>
        );
    }
}

export default Servicos;
