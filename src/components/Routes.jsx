import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import { JobsPage } from "../pages/JobsPage/JobsPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { PeoplePage } from "../pages/PeoplePage/PeoplePage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { RecoverPage } from "../pages/RecoverPage/RecoverPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import CreateJobPage from "../pages/CreateJobPage/CreateJobPage";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { CreatePage } from "../pages/CreatePage/CreatePage";
import { PeopleDetailPage } from "../pages/PeoplePage/pages/PeopleDetailPage";
import PrivateRoute from "../containers/PrivateRoute";
import PublicRoute from "../containers/PublicRoute";
import AccountPage from "../pages/ProfilePage/pages/AccountPage";


export function Routes() {
  return (
    <Switch>
      <PublicRoute component={RecoverPage} exact path="/recover" />
      <PublicRoute component={SignUpPage} exact path="/signup" />
      <PublicRoute component={LoginPage} exact path="/login" />
      <PublicRoute component={LandingPage} exact path="/landing" />
      <PrivateRoute component={JobsPage} exact path="/jobs/:idJob" />
      <PrivateRoute component={JobsPage} exact path="/jobs" />
      <PrivateRoute component={CreateJobPage} exact path="/create/job" />
      <PrivateRoute component={CreatePage} exact path="/create" />
      <PrivateRoute component={PeopleDetailPage} exact path="/people/:idPeople" />
      <PrivateRoute component={PeoplePage} exact path="/people" />
      <PrivateRoute component={SearchPage} exact path="/search" />
      <PrivateRoute component={AccountPage} exact path="/profile/account" />
      <PrivateRoute component={ProfilePage} exact path="/profile" />
      <PrivateRoute component={HomePage} exact path="/home" />
      <Route path="*">
        <Redirect to="/landing" />
      </Route>
    </Switch>
  );
}
