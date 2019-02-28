import React from "react";
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default props => (
  <AppBar position="static" style={{ background: '#424242'}}>
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex: 1}}>
        CONNECTIONS
      </Typography>
      <Typography style={{flex: -1}}>
    {props.children}
    </Typography>
    </Toolbar>
  </AppBar>
);