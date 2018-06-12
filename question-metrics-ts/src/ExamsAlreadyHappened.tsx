import * as React from 'react';
import './App.css';

export class ExamsAlreadyHappened extends React.Component {
    public render() {
      return (
        <div>
            <p className="App-intro">
            Concursos já ocorridos:
            </p>

            <div className="App-Square">
                <span className="App-SpanSquare">05/06/2017 - TJ - SP</span>
            </div>

            <div className="App-Square">
                <span className="App-SpanSquare">28/04/2018 - TJ - MG</span>
            </div>

            <div style={{ clear: "both" }} >&nbsp;</div>
        </div>             
      )
    }
}