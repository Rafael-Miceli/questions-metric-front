import * as React from 'react';
import './App.css';
import { ExamsAlreadyHappened } from './ExamsAlreadyHappened'
import { ExamsTooked } from './ExamsTooked'
import { Login } from './Login';
import logo from './logo.svg';

class App extends React.Component<any, AppState>{

  private AppState: AppState;

  constructor(prop: any) {
    super(prop);
  }

  public render() {

    if(this.AppState && this.AppState.IsUserLoogedIn){ 
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to QuestionMetrics</h1>
          </header>
  
          <ExamsTooked />        
  
          <ExamsAlreadyHappened />        
        </div>
      );
    } else {
      return (
        <Login />
      )
    }    
  }
}

// tslint:disable-next-line:max-classes-per-file
class AppState {
  public IsUserLoogedIn: boolean;
  public UserLoggedInId: string;  
  public UserLoggedInName: string;
}

export default App;
