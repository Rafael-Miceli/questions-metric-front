import * as React from 'react';
import './App.css';
import { IExamMetrics } from './IExam';

export class ExamsTookedMetrics extends React.Component<ExamsTookedMetricsProps> {
    
    constructor(props: ExamsTookedMetricsProps) {
        super(props);

        // tslint:disable-next-line:no-console
        console.log("Metrics: ", props)
    }

    public render() {
      return (        
        <div>
            <p className="App-intro">
                Métricas da prova: {this.props.examTitle}
            </p>

            <div>
                <p> Total de questões de prova ja respondidas: {this.props.examMetrics.totalQuestions}</p>
                <p> Total de questões Acertadas: {this.props.examMetrics.totalCorrectQuestions}</p>
                <p> Total de questões erradas: {this.props.examMetrics.totalWrongQuestions}</p>
                {/* <p> Motivos de erro: {this.props.examMetrics.}</p> */}

            </div>
        </div>
      )
    }
}

// tslint:disable-next-line:max-classes-per-file
class ExamsTookedMetricsProps {
    public examMetrics: IExamMetrics
    public examTitle: string
}