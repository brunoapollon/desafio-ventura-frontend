import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>Hello World</h1>} />
    </Switch>
  );
}

export default Routes;
