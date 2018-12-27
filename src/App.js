import React, { Component } from 'react';
import './App.css';
import Corpo from './components/Corpo';
import Menu from './components/Menu';

//Materials
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


class App extends Component {
  toggleMenu() {
    var menu = document.getElementById("check");
    if(menu.checked == false){menu.checked=true;} 
    else{menu.checked=false;}
  }

  render() {
    return (
      <div className="app">

        <input type="checkbox" id="check"/>
        <label id="botaoM" for="check">
          <IconButton className="iconeMenu" color="inherit" for="check" aria-label="Menu" onClick={this.toggleMenu.bind(this)}>
            <MenuIcon />
          </IconButton>
        </label>
        

        <Menu />
        <Corpo />
      </div>
    );
  }
}

export default App;
