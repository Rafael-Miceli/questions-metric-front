import * as React from 'react';
import './App.css';
import {ExamsTookedMetrics} from './ExamsTookedMetrics';

export class ExamsTooked extends React.Component {
    public render() {
      return (
        <div>
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

            <ExamsTookedMetrics />
        </div>             
      )
    }
}