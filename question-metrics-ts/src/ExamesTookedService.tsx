import { IUser } from "./IExam";

export class ExamsTookedService {

    public getAllExams(): Promise<IUser>{
        return fetch("http://localhost:5000/api/Account/id/add6f86c-db9e-4e72-8994-3233654d71e3")
                .then(resp => {
                    return resp.json()
                })
                .then(res => {
                    return res;
                })
    }
}