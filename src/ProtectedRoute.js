import React from "react";
import SideDrawer from "./components/SideDrawer";
import { Route } from "react-router-dom";
import { makeStyles, Grid, Divider, Typography } from "@material-ui/core";
import './index.css'

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#272723",
    padding: theme.spacing(8),
    zIndex: 10,
    position: "relative",
    top: "100%",
  },
}));

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const classes = useStyles();

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <SideDrawer>

            <Component {...props} />
          </SideDrawer>
        </>
      )}
    />
  );
};

export default ProtectedRoute;
