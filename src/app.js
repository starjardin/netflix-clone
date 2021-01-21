import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import{ Home, Signin } from './pages'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <p>I will be the sign up page</p>
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <p>I will be the browse page</p>
        </Route>
      </Switch>
    </Router>
  );
}