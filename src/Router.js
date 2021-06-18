import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Home from "./screens/Home";
import Employees from "./screens/Employees";
import Business from "./screens/Business";
import TimeSheets from "./screens/TimeSheets";
import Assets from "./screens/Assets";
import Recruiment from "./screens/Recruiment";
import Projects from "./screens/Projects";
import Training from "./screens/Training";
import Admin from "./screens/Admin";
import Auth from "./screens/Auth";


const Router = () => {
  const history = useHistory();

  return (
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/employees" component={Employees} />
      <ProtectedRoute exact path="/business" component={Business} />
      <ProtectedRoute exact path="/timesheet" component={TimeSheets} />
      <ProtectedRoute exact path="/assets" component={Assets} />
      <ProtectedRoute exact path="/recruitment" component={Assets} />
      {/* <ProtectedRoute exact path="/recruitment" component={Recruiment} /> */}
      <ProtectedRoute exact path="/projects" component={Projects} />
      <ProtectedRoute exact path="/training" component={Training} />
      <ProtectedRoute exact path="/admin" component={Admin} />
      <Route exact path="/auth" component={Auth} />
    </Switch>
  );
};

export default Router;
