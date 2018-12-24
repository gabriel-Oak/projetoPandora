import React, { Component } from 'react';
import './App.css';
import Corpo from './components/Corpo';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="app">
        
        <input type="checkbox" id="check"/>
        <label id="botaoM" for="check"><img src={process.env.PUBLIC_URL + "/img/menu-4x.png"} alt="Menu" /></label>
        

        <Menu />
        <Corpo />
      </div>
    );
  }
}

export default App;
