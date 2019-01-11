import React, { Component } from 'react';
import Baner from './main/Baner';
import Contato from './main/Contato';
import Sobre from './main/Sobre';
import Servicos from './main/Servicos';
import Footer from './main/Footer';

const styles = {
    Typography: {
        marginTop: 20,
        marginBottom: 20,
    },

    Divs:{
        marginTop: 700,
        display: 'flex',
        flexDirection: 'column'
    }
}

class Main extends Component {
    
    render() {
        return (
            <div className="main">
            	
                <Servicos styles={styles} />
            	<Sobre styles={styles} />            		
            	<Contato />
                <Footer />
            </div>
        );
    }
}

export default Main;
//<Baner />