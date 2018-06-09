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

        <div style={square}>
          <span style={spanSquare}>05/06/2017 - TJ - RJ</span>
        </div>

        <div style={square}>
        <span style={spanSquare}>28/04/2018 - TJ - RS</span>
        </div>

        <div style={{ clear: "both" }} >&nbsp;</div>

        <div>
          <p className="App-intro">
            Métricas de todas as provas:
          </p>
        </div>
        
      </div>
    );
  }
}

const spanSquare: any = {
  marginTop: "100%"
}

const square: any = {
  alignItems: "center", 
  backgroundColor: "#222", 
  color: "white",
  display: "flex",
  float: "left",     
  height: 0, 
  justifyContent: "center",
  margin: "5px",
  paddingBottom: "30%",
  width: "30%"  
}

export default App;
