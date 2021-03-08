import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import { NotFound } from "../pages/404Page/NotFound";
import { HomePage } from "../pages/HomePage/HomePage";
import { PeoplePage } from "../pages/PeoplePage/PeoplePage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { RecoverPage } from "../pages/RecoverPage/RecoverPage";
import { SignupPage } from "../pages/SignupPage/SignupPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import Step2 from "../pages/CreateJobPage/Steps/Step2";
// import Step1 from "../pages/CreateJobPage/Steps/Step1";

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
        {/* <Step1/> */}
        <Step2/>
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
        <p>SearchPage</p>
      </Route>
      <Route path="/recover">
        <RecoverPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
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
