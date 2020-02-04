import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import PrivateRoute from './auth'

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));
const Panel = lazy(() => import('./pages/Panel'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/auth" component={Auth}/>
        <PrivateRoute path="/panel" component={Panel}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App