import React, { Component } from 'react';
import './App.css';
import Corpo from './components/Corpo';
import Menu from './components/Menu';

//Materials
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



class App extends Component {
  toggleMenu() {
    var menu = document.getElementById("check");
    if(menu.checked == false){menu.checked=true;} 
    else{menu.checked=false;}
  }

  render() {

    const tema = createMuiTheme({
      palette: {
        primary: {
          main: '#6a1b9a',
          dark: '#4a126b',
          contrastText: '#fff',
        },
        secondary: {
          main: '#f50057',
          dark: '#ab003c',
          contrastText: '#fff',
        },
      }
    });


    return (
      <MuiThemeProvider theme={tema}>
        <div className="app">

          <input type="checkbox" id="check"/>
          <label id="botaoM" for="check">
            <IconButton className="iconeMenu" color="inherit" aria-label="Menu" onClick={this.toggleMenu.bind(this)}>
              <MenuIcon />
            </IconButton>
          </label>
          

          <Menu />
          <Corpo />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
