import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";




export default props => (
  <AppBar position="static" style={{ background: '#424242' }}>
  {/* 212121 424242*/}
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Connections
      </Typography>
    {props.children}

    </Toolbar>
  </AppBar>
);