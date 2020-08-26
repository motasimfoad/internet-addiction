import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../Screen/Home';

export default function App() {
    return (
      <Router>
       <Switch>
            <Route path="/">
              <Home />
            </Route>
            {/* <Route path="/admin">
              <Admin />
            </Route> */}
          </Switch>
        </Router>
    );
  }