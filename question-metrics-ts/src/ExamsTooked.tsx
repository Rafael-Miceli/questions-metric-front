import * as React from 'react';
import './App.css';
import { ExamsTookedService } from './ExamesTookedService';
import {ExamsTookedMetrics} from './ExamsTookedMetrics';
import { IExam, IUser } from "./IExam";

export class ExamsTooked extends React.Component<any, ExamsTookedState> {

    private ExamsTooked: ExamsTookedState = {User: null, SelectedExam: null};
    
    constructor(props: any) {
        super(props);

        const examsTookedService = new ExamsTookedService();
        examsTookedService.getAllExams().then((user: IUser) => {
            
            if (user.tookedExams.length) {
                this.ExamsTooked = {User: user, SelectedExam: user.tookedExams[0]};                
            } else {
                this.ExamsTooked = {User: user, SelectedExam: null};
            }

            // tslint:disable-next-line:no-console
            console.log("Exames feitos: ", this.ExamsTooked);
        
            this.setState(this.ExamsTooked);
        });
    }

    public selectExam(examId: string) {
        const selectedExam = this.ExamsTooked.User!.tookedExams.filter(e => e.id === examId)[0];
        this.ExamsTooked.SelectedExam = selectedExam;

        this.setState(this.ExamsTooked);
    }

    public render() {

        let tookedSqaures;
        let metrics;

        if (this.ExamsTooked.User) {
            tookedSqaures = ((this.ExamsTooked.User!.tookedExams.map(exam => {
                return(
                    <div key={exam.id} className="App-Square" onClick={this.selectExam.bind(this, exam.id)}>
                        <span className="App-SpanSquare">{exam.date} {exam.name}</span>
                    </div>    
                )                    
            })))

            metrics = (
                <ExamsTookedMetrics examMetrics={this.ExamsTooked.SelectedExam!.examMetrics} examTitle={this.ExamsTooked.SelectedExam!.name}/>
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
    public SelectedExam: IExam | null
}