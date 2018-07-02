import * as React from 'react';
import './App.css';

export class Login extends React.Component {
    
    constructor(props: any) {
        super(props);

    }

    public render() {
      return (        
        <div>
            <label>Login</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <br />
            <input type="button" value="Login" />
        </div>
      )
    }
}
