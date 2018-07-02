import * as React from 'react';
import './App.css';

export class Login extends React.Component {
    
    constructor(props: any) {
        super(props);

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
                            <input name="user" type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button className="btn btn-info btn-block login" type="button">Login</button>
                        </form>
                    </div>
                </div>
                
        </div>
      )
    }
}
