import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/training" component={() => <h1>Hello World</h1>} />
    </Switch>
  );
}

export default Routes;
