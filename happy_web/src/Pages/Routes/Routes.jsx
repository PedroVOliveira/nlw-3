import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from '../LandingPage';
import OrphanagesMap from '../OrphanagesMap';
import AddOrphanages from '../AddOrphanages';
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route
            path='/'
            component={LandingPage}
            exact
          />
          <Route
            path='/map'
            component={OrphanagesMap}
          />
          <Route
            path='/create-orphanages'
            component={AddOrphanages}
          />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;
