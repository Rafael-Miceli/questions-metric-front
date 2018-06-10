import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to QuestionMetrics</h1>
        </header>

        <p className="App-intro">
          Provas que ja fiz:
        </p>

        <div className="App-Square">
          <span className="App-SpanSquare">05/06/2017 - TJ - RJ</span>
        </div>

        <div className="App-Square">
        <span className="App-SpanSquare">28/04/2018 - TJ - RS</span>
        </div>

        <div style={{ clear: "both" }} >&nbsp;</div>

        <div>
          <p className="App-intro">
            Métricas de todas as provas:
          </p>

          <div>
            <span> Total de questões de prova ja respondidas: </span>
          </div>
        </div>

        <div>
          <p className="App-intro">
            Concursos já ocorridos:
          </p>
        </div> 
        
      </div>
    );
  }
}

export default App;
