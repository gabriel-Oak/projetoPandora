import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MaskedInput from 'react-text-mask';

import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function preenchido(value) {
	if (value != '' && value != null) {
		return true;
	}

	return false;
}

function isEmail(value) {
  if (!/@/g.test(value)) {
    return false;
  } else if (preenchido(value)){return true;}
 return false;
};

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function sendEmail(data){
		
	 	axios.post('https://mailer-pandora.herokuapp.com/send',data).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Sua mensagem foi enviada"); 
            }else if(response.data.msg === 'fail'){
                alert("Oops alguma coisa deu errado ao enviar!")
            }
        });
	}


class Contato extends Component {
    
	state = {
    	open: false,
    	erro: false,
    	nome: '',
    	email: '',
    	empresa: '',
    	mensagem: '',
    	tel: '( )    -     ',
    	alerta: 'Erro com o formulário'
};

	resetForm(){
		this.setState({
      		open: false,
      		erro: false,
	    	nome: '',
	    	email: '',
	    	empresa: '',
	    	mensagem: '',
	    	tel: '( )    -     ',
	    	alerta: 'Erro com o formulário'

    	});
    }

 	handleChange = name => event => {
    	this.setState({
      		[name]: event.target.value,
    	});
  	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	

	validateForm = () => {
		const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const tel = document.getElementById('tel').value;
        const emp = document.getElementById('empresa').value;
        const mensagem = document.getElementById('mensagem').value;

		if (preenchido(nome)) {
			if (isEmail(email)) {
				if (tel != "(  )     -     ") {
					if (preenchido(emp)) {
							if (preenchido(mensagem)) {
							const data = {
							                nome: nome,   
							                email: email,  
							                tel: tel,
							                emp: emp,
							                mensagem: mensagem
						 				 }
							sendEmail(data);
							this.resetForm();
						} else{ this.setState({ erro: true, alerta: 'Mensagem vazia!' });}
					} else{ this.setState({ erro: true, alerta: 'Qual a empresa?' });}
				} else{ this.setState({ erro: true,alerta: 'Informe um telefone!' });}
			} else{ this.setState({ erro: true, alerta: 'Email invalido!' });}
		} else{ this.setState({ erro: true, alerta: 'Nome não preenchido!' });}
	}
    
	handleCloseS = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ erro: false });
  };

    render() {
    	 
        return (
            <div id="contato" style={{marginBottom: 300, marginTop: 600}}>
            	<Typography component="h2" variant="display3" color="inherit">
		          Entre em contato conosco
		        </Typography>


      	    	<Button size="large" style={{marginBottom: 20, marginLeft:'auto', marginRight:'auto', marginTop: 20}} variant="outlined" color="primary" onClick={this.handleClickOpen}>
            	  Clique para nos contatar
            	</Button>


            	<Dialog
	            	  open={this.state.open}
	            	  TransitionComponent={Transition}
	            	  keepMounted
	            	  onClose={this.handleClose}
	            	  aria-labelledby="alert-dialog-slide-title"
	            	  aria-describedby="alert-dialog-slide-description"
	            	>
	            	  <DialogTitle id="alert-dialog-slide-title">
	            	    {"Por favor preencha os campos"}
	            	  </DialogTitle>
	            	  <DialogContent>
	            	    <DialogContentText id="alert-dialog-slide-description">
	            	      
	            	    	<form id="contatoForm" noValidate autoComplete="off" style={{display:'flex', flexDirection:'column'}} >

	            	    		 <Snackbar
						          anchorOrigin={{
						            vertical: 'bottom',
						            horizontal: 'left',
						          }}
						          open={this.state.erro}
						          autoHideDuration={18000}
						          onClose={this.handleCloseS}
						        >
						          <MySnackbarContentWrapper
						            onClose={this.handleCloseS}
						            variant="error"
						            message={this.state.alerta}
						          />
						        </Snackbar>


			        			<TextField
			        				id="nome"
									name="nome"
									label="Nome"
									value={this.state.nome}
									onChange={this.handleChange('nome')}
									margin="normal"
									/>

									<TextField
									id="email"
									name="email"
									label="Email"
									value={this.state.email}
									onChange={this.handleChange('email')}
									margin="normal"
									/>

									<TextField
									id="tel"
									name="tel"
									label="Telefone"
									value={this.state.tel}
									onChange={this.handleChange('tel')}
									margin="normal"
									InputProps={{inputComponent: TextMaskCustom,}}
									/>

									<TextField
									name="empresa"
									id="empresa"
									label="Empresa"
									value={this.state.empresa}
									onChange={this.handleChange('empresa')}
									margin="normal"
									/>

									<TextField
									multiline
									rowsMax="5"
									id="mensagem"
									name="mensagem"
									label="Mensagem"
									value={this.state.mensagem}
									onChange={this.handleChange('mensagem')}
									margin="normal"
									/>
			    			</form> 

	            	    </DialogContentText>
	            	  </DialogContent>
	            	  <DialogActions>
	            	    <Button onClick={this.handleClose} color="secondary">
	            	      Cancelar
	            	    </Button>
	            	    <Button color="primary" onClick={this.validateForm}>
	            	      Enviar
	            	    </Button>
	            	  </DialogActions>
            	</Dialog>


            </div>
        );
    }
}

export default Contato;
