import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import LandingPage from '../LandingPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route
        component={LandingPage}
        exact
      />
    </BrowserRouter>
  )
}


export default Routes;
