import React, { Component } from 'react';
import './App.css';
import{BrowserRouter as Router , Route, Switch} from 'react-router-dom'

import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Customer from './Customer/Dashboard';
import Form from './Customer/Formone';

class App extends Component{
  render(){
    return(
      <Router>
      <div className="App">
        <Switch>
        <Route exact path ="/" component={Home}/>
        
        <Route exact path ="/dashboard" component={Dashboard}/>  
        <Route exact path ="/customer" component={Customer}/>      
        <Route exact path ="/form" component={Form}/>   

        <Route component={Error} />

        </Switch>
      </div>
      </Router>
    )
  }
}
export default App;
