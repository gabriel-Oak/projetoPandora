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
		          	e Web Design.
		          </p>
		        </Typography>
            	</div>

            	<div className="vantagens">
            		<div className="vantagensItem">
            			<div className="vantagensItemT">
            				Basico
            			</div>
            			<div className="vantagensItemt">
            				<ul>
            					<li> Criação de páginas </li>
            					<li> Estruturação de facebook e instagram </li>
            					<li> 3 posts semanais </li>
            					<li> 3 stories semanais </li>
            					<li> Atendimento 2.0 </li>
            					<li> O cliente deve dispoilizar as imagens/videos e conteúdo específico </li>
            					<li> Gestão de 1 anúncio </li>
            					<li> Relatório de resultados mensal </li>
            				</ul>
            			</div>
            		</div>

            		<div className="vantagensItem">
            			<div className="vantagensItemT">
            				Startup
            			</div>
            			<div className="vantagensItemt">
            				<ul>
            					<li> Criação de páginas </li>
            					<li> Estruturação de facebook e instagram </li>
            					<li> 5 posts semanais </li>
            					<li> 3 stories semanais </li>
            					<li> Atendimento 2.0 </li>
            					<li> Respostas ao cliente </li>
            					<li> O cliente deve dispoilizar as imagens/videos e conteúdo específico </li>
            					<li> Gestão de 1 anúncio </li>
            					<li> Relatório de resultados mensal </li>
            				</ul>
            			</div>
            		</div>

            		<div className="vantagensItem">
            			<div className="vantagensItemT">
            				Enterprise
            			</div>
            			<div className="vantagensItemt">
            				<ul>
            					<li> Criação de páginas </li>
            					<li> Estruturação de facebook e instagram </li>
            					<li> 5 posts semanais </li>
            					<li> 5 stories semanais </li>
            					<li> Atendimento 2.0 </li>
            					<li> Branding </li>
            					<li> Respostas ao cliente </li>
            					<li> O cliente deve dispoilizar as imagens/videos e conteúdo específico </li>
            					<li> Gestão de 1 anúncio </li>
            					<li> Relatório de resultados mensal </li>
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
