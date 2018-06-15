import * as React from 'react';
import './App.css';
import { ExamsTookedService } from './ExamesTookedService';
import {ExamsTookedMetrics} from './ExamsTookedMetrics';
import { IExam } from "./IExam";

export class ExamsTooked extends React.Component<IExam, IExam[]> {    

    private examsTooked: IExam[];
    
    constructor(props: IExam) {
        super(props);

        const examsTookedService = new ExamsTookedService();
        this.examsTooked = examsTookedService.getAllExams();        
    }

    public render() {
      return (
        <div>
            <p className="App-intro">
                Provas que ja fiz:
            </p>

            {
                this.examsTooked.map(exam => {
                    return(
                        <div key={exam.title} className="App-Square">
                            <span className="App-SpanSquare">{exam.title}</span>
                        </div>    
                    )                    
                })
            }                      

            <div style={{ clear: "both" }} >&nbsp;</div>

            <ExamsTookedMetrics />
        </div>             
      )
    }
}