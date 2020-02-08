import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import { isAuthenticated } from './auth'

const Home = lazy(() => import('./pages/Home/'));
const Signin = lazy(() => import('./pages/Auth/Signin/'));
const Signup = lazy(() => import('./pages/Auth/Signup/'));
const Panel = lazy(() => import('./pages/Panel/'));


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={props => (
    isAuthenticated() ? (
      <Component { ... props} />
    ) : (
     <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
  )
  )} />
)


const Routes = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <PrivateRoute path="/panel" component={Panel}/>
        </Switch>
      </Suspense>
    </Router>
)

export default Routes