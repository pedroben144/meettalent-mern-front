import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import { NotFound } from "../pages/404Page/NotFound";
import { HomePage } from "../pages/HomePage/HomePage";
import { PeoplePage } from "../pages/PeoplePage/PeoplePage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { RecoverPage } from "../pages/RecoverPage/RecoverPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SearchPage } from "../pages/SearchPage/SearchPage";

export function Routes() {
  return (
    <Switch>
      <Route path="/jobs">
        <p>JobsPage</p>
      </Route>
      <Route path="/create/hackathon">
        <p>CreateJobPage</p>
      </Route>
      <Route path="/create/job">
        <p>CreateJobPage</p>
      </Route>
      <Route path="/create">
        <p>CreatePage</p>
      </Route>
      <Route path="/people/:idPeople">
        <p>PeoplePageDetail</p>
      </Route>
      <Route path="/people">
        <PeoplePage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/recover">
        <RecoverPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/landing">
        <LandingPage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
