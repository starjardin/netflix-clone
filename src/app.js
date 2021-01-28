import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Home,Signin,SignUp,Browse } from './pages'
import { useAuthListener } from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export function App() {

  const { user } = useAuthListener()
  
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={ user }
          loggedInPath={ ROUTES.BROWSE }
          path={ ROUTES.HOME }
          exact
        >
          <Home />
        </IsUserRedirect>
        <IsUserRedirect exact
          user={ user }
          loggedInPath={ ROUTES.BROWSE }
          path={ ROUTES.SIGN_IN }
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect exact
          user={ user }
          loggedInPath={ ROUTES.BROWSE }
          path={ ROUTES.SIGN_UP }
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute exact
          user={user}
          path={ ROUTES.BROWSE }
        >
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}