import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../../pages/LandingPage/LandingPage';





export function Routes(){
    return(
        <Switch>
            <Route  path="/jobs">
                <p>JobsPage</p>
            </Route>
            <Route  path="/create/hackathon">
                <p>CreateJobPage</p>
            </Route>
            <Route  path="/create/job">
                <p>CreateJobPage</p>
            </Route>
            <Route  path="/create">
                <p>CreatePage</p>
            </Route>
            <Route  path="/people/:idPeople">
                <p>PeoplePageDetail</p>
            </Route>
            <Route  path="/people">
                <p>PeoplePage</p>
            </Route>
            <Route  path="/search">
                <p>SearchPage</p>
            </Route>
            <Route  path="/recover">
                <p>RecoverPage</p>
            </Route>
            <Route  path="/signup">
                <p>RegisterPage</p>
            </Route>
            <Route  path="/login">
                <p>LoginPage</p>
            </Route>
            <Route path="/landing">
                <LandingPage/>
            </Route>
            <Route path="/profile">
                <p>ProfilePage</p>
            </Route>
            <Route exact path="/home">
                <p>homePage</p>
            </Route>
            <Route path="*">
                <p>URL NOT FOUND</p>
            </Route>

        </Switch>
    );
}