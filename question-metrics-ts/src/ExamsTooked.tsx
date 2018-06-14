import * as React from 'react';
import './App.css';
import {ExamsTookedMetrics} from './ExamsTookedMetrics';

interface IExams {
    exams: IExam[];
}

interface IExam {
    title: string;
}

const exams: IExam[] = [
    {title: '20/02/2018 - TJ - RS'},
    {title: '28/05/2018 - TJ - RJ'},
    {title: '15/04/2018 - TJ - SP'}
]

export class ExamsTooked extends React.Component {
    
    
    constructor(props: IExams) {
        super(props);
        
        this.state = this.props;

        this.setState(exams);
    }

    public render() {
      return (
        <div>
            <p className="App-intro">
                Provas que ja fiz:
            </p>

            {
                exams.map(exam => {
                    return(
                        <div key={exam.title} className="App-Square">
                            <span className="App-SpanSquare">{exam.title}</span>
                        </div>    
                    )                    
                })
            }
                        

            {/* <div className="App-Square">
                <span className="App-SpanSquare">28/04/2018 - TJ - RS</span>
            </div> */}

            <div style={{ clear: "both" }} >&nbsp;</div>

            <ExamsTookedMetrics />
        </div>             
      )
    }
}