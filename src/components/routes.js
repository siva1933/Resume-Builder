import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonalDetails from './PersonalDetails';
import ProjectDetails from './ProjectDetails';
import Education from './Education';
import Professional from './Professional';
import Hobbies from './Hobbies';
import Languages from './Languages';
import ShowResume from './ShowResume';

const Routes = (
  <Switch>
    <Route exact path="/personal" component={PersonalDetails} />
    <Route exact path="/project" component={ProjectDetails} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/proffessional" component={Professional} />
    <Route exact path="/hobbies" component={Hobbies} />
    <Route exact path="/language" component={Languages} />

    <Route exact path="/" component={ShowResume} />
  </Switch>
);

export default Routes;
