import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const Auth = lazy(() => import('./routes/Auth'));
const Panel = lazy(() => import('./routes/Panel'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/panel" component={Panel}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App