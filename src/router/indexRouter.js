import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../views/Home";
export default function () {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect path="/" to="/home" exact />
    </Switch>
  );
}