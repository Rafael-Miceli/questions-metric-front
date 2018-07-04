import * as React from 'react';
import './App.css';

export class Login extends React.Component<any, LoginState> {

    private loginState: LoginState = new LoginState();
    
    constructor(props: any) {
        super(props);

        const loginService = new LoginService();
    }

    public render() {
      return (        
        <div className="container">
            <div className="login-container">
                    <div id="output">&nbsp</div>
                    <div className="avatar" />
                    <p className="appName">Question Metrics</p>
                    <div className="form-box">
                        <form action="" method="">
                            <input name="user" type="text" placeholder="username" onChange={e => {
                                this.loginState.Username = e.target.value;
                                this.setState(this.loginState);
                            }} />
                            <input type="password" placeholder="password" onChange={e => {
                                this.loginState.Password = e.target.value;
                                this.setState(this.loginState);
                            }}/>
                            <button className="btn btn-info btn-block login" type="button" onClick={() => {
                                // tslint:disable-next-line:no-console
                                console.log("Logando: ", this.loginState);
                            }}>Login</button>
                        </form>
                    </div>
                </div>
                
        </div>
      )
    }
}

// tslint:disable-next-line:max-classes-per-file
class LoginState {
    public Username: string;
    public Password: string
}