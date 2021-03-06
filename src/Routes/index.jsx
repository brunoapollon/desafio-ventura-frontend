import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Training from '../pages/Training';

/**
 * component de rotas organizador em uma pasta para a exportação
 */

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/training" component={Training} />
    </Switch>
  );
}

export default Routes;
