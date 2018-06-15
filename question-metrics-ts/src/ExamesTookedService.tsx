import { IExam } from "./IExam";

export class ExamsTookedService {

    public getAllExams(): IExam[] {
        return [
            {title: '20/02/2018 - TJ - RS'},
            {title: '28/05/2018 - TJ - RJ'},
            {title: '15/04/2018 - TJ - SP'}
        ];
    }
}