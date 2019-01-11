import React, { Component } from 'react';
import ArrowNavs from './../small/ArrowNavs';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const th = createMuiTheme({
  palette: {
    primary: {main: "#eee"}
  }
});
const ExpansionPanel = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);


class Header extends Component {
   state = {
    expanded: '',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };


    render() {
        const { expanded } = this.state;

        return (
            <div>
                <div className="header">
                	<picture>
                		<source media="(max-width: 480px)" srcSet={process.env.PUBLIC_URL + "/img/logo-p.png"}/>
                		<img src={process.env.PUBLIC_URL + "/img/logo-g.png"} alt="Logomarca"/>
                	</picture>
                </div>
                <picture>
                    <div className="headertxt">
                        <MuiThemeProvider theme={th}>
                          <ExpansionPanel style={{backgroundColor:"rgba(0,0,0,0)"}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                                 <h1 >
                                    Conosco seu sonho ganha força
                                </h1>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                                <h2 >
                                    Independente se ele é considerado maluco, diferente, inovador, ou um negócio tradicional,  transformamos ele em seu foguete para o sucesso, acreditamos nele e vamos te ajudar a chegar lá...
                                </h2>
                              </ExpansionPanelDetails>
                          </ExpansionPanel>
                        </MuiThemeProvider>
                    </div>
                    <source media="(max-width: 480px)" srcSet={process.env.PUBLIC_URL + "/img/Watching-the-Stars-sm.png"}/>
                    <img src={process.env.PUBLIC_URL + "/img/Watching-the-Stars.png"} style={{width: "100%",
        zIndex: 0}}/>
                </picture>

                <div style={{"margin-top":"-100px"}}>
                    <ArrowNavs direction={"bot"} 
                               link={"#servicos"}
                               offset={'100'}/>
                </div>
            </div>
        );
    }
}

export default Header;