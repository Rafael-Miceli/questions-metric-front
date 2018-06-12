import * as React from 'react';
import './App.css';

export class ExamsTookedMetrics extends React.Component {
    public render() {
      return (        
        <div>
            <p className="App-intro">
                Métricas de todas as provas:
            </p>

            <div>
                <span> Total de questões de prova ja respondidas: </span>
            </div>
        </div>
      )
    }
}