import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './Components/HomePage';
import FinalPage from './Components/FinalPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
         <div>
           <Route exact path="/" component={HomePage} />
           <Route path="/success/:user1/:user2" component={FinalPage} />
         </div>
        </Router>
      </div>
    );
  }
}

export default App;
