import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Question } from './Questions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Métricas de erros</h2>
        <header>
          <label for="uf">Prova</label>
          <select name="uf">
            <option>TJ Paraná</option>
            <option>TJ SC</option>
            <option>TJ SP</option>
            <option>TJ RS</option>
          </select>
        </header>
        <div>
          <h3>Questões</h3>
          <Question />
        </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
