import * as React from 'react';
import './App.css';
import { ExamsTookedService } from './ExamesTookedService';
import {ExamsTookedMetrics} from './ExamsTookedMetrics';
import { IExam, IExamMetrics, IUser } from "./IExam";

export class ExamsTooked extends React.Component<any, ExamsTookedState> {

    private ExamsTooked: ExamsTookedState = {User: null, FirstExamMetrics: null, FirstExam: null};
    
    constructor(props: any) {
        super(props);

        const examsTookedService = new ExamsTookedService();
        examsTookedService.getAllExams().then((user: IUser) => {
            
            if (user.tookedExams.length) {
                this.ExamsTooked = {User: user, FirstExamMetrics: user.tookedExams[0].examMetrics, FirstExam: user.tookedExams[0]};                
            } else {
                this.ExamsTooked = {User: user, FirstExamMetrics: null, FirstExam: null};
            }

            // tslint:disable-next-line:no-console
            console.log("Exames feitos: ", this.ExamsTooked);
        
            this.setState(this.ExamsTooked)
        });        
    }

    public render() {

        let tookedSqaures;
        let metrics;

        if (this.ExamsTooked.User) {
            tookedSqaures = ((this.ExamsTooked.User!.tookedExams.map(exam => {
                return(
                    <div key={exam.name} className="App-Square">
                        <span className="App-SpanSquare">{exam.name}</span>
                    </div>    
                )                    
            })))

            metrics = (
                <ExamsTookedMetrics examMetrics={this.ExamsTooked.FirstExamMetrics!} examTitle={this.ExamsTooked.FirstExam!.name}/>
            )
        }
        

        return (
            <div>
                <p className="App-intro">
                    Provas que ja fiz:
                </p>

                {tookedSqaures}

                <div style={{ clear: "both" }} >&nbsp;</div>

                {metrics}
            </div>             
        )
    }
}

// tslint:disable-next-line:max-classes-per-file
class ExamsTookedState {
    public User: IUser | null
    public FirstExamMetrics: IExamMetrics | null
    public FirstExam: IExam | null
}