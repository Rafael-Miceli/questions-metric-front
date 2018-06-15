export interface IExam {
    name: string;
    date: Date;
    questions: IQuestion[];
    examMetrics: IExamMetrics;
}

export interface IQuestion {
    number: number;
    answer: IAnswer;
}

export interface IAnswer {
    isAnswerWrong: boolean;
    whyIsWrong?: string;
    isAnswerCorrect: boolean;
}

export interface IExamMetrics {
    totalQuestions: number;
    totalWrongQuestions: number;
    totalCorrectQuestions: number;
    // reasonsMissedQuestions: IReasonMissedQuestions[]
}
// export interface IReasonMissedQuestions {
//     item1: 
// }