import { IUser } from "./IExam";

export class LoginService {

    public login(username: string, password: string): Promise<IUser>{       

        return fetch("http://localhost:5000/api/account/login", {
            body: {
                "username": "username"
            },
            method: "POST"            
        })
                .then(resp => {
                    return resp.json()
                })
                .then(res => {
                    return res;
                })
    }
}