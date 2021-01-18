import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
        <Switch>
            <Route path="/signin">
                <p>I will be the sign in page</p>
            </Route>
            <Route path="/signup">
                <p>I will be the sign up page</p>
            </Route>
            <Route path="/browse">
                <p>I will be the browse page</p>
            </Route>
            <Route path="/">
                <p>I am going to be a cloned Netflix application</p>
            </Route>
        </Switch>
    </Router>
  );
}
