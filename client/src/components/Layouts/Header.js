import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import grey from "@material-ui/core/colors/grey";


export default props => (
  <AppBar position="static" style={{ background: '#5b5b5b' }}>
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Connections
      </Typography>
      <Button color="inherit">{props.children}</Button>
    </Toolbar>
  </AppBar>
);