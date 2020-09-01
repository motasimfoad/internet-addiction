import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../Screen/Home';
import Admin from '../Screen/Admin';

export default function App() {
    return (
      <Router>
       <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
    );
  }