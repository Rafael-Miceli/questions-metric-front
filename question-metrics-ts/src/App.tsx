import * as React from 'react';
import './App.css';
import { ExamsAlreadyHappened } from './ExamsAlreadyHappened'
import { ExamsTooked } from './ExamsTooked'

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to QuestionMetrics</h1>
        </header>

        <ExamsTooked />

        <div>
          <p className="App-intro">
            Métricas de todas as provas:
          </p>

          <div>
            <span> Total de questões de prova ja respondidas: </span>
          </div>
        </div>

        <ExamsAlreadyHappened />        
      </div>
    );
  }
}

export default App;
