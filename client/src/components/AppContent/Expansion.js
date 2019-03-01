import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextFields from "../AppContent/InputForm";

import SiennaAvatar from '../Avatar/Sienna';
import RafaelAvagtar from '../Avatar/Rafael'

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}> <SiennaAvatar variant="avatar" align="right"  />Sienna Spargo </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          <Typography>
            <strong>Phone Number: </strong>
            <br />
            <strong>Industry: </strong>
            <br />
            <strong>Company: </strong>
            <br />
            <strong>Street: </strong>
            <br />
            <strong>City: </strong>
            <br />
            <strong>State: </strong>
            <br />
            <strong>Email: </strong>
          </Typography>
          
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}> <SiennaAvatar variant="avatar" align="right"  />Rafael Blanco</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Phone Number:
            <br />
            Industry:
            <br />
            Company:
            <br />
            Street:
            <br />
            City:
            <br />
            State:
            <br />
            Email:
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}> <SiennaAvatar variant="avatar" align="right"  />Kevin Ferguson</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Phone Number:
            <br />
            Industry:
            <br />
            Company:
            <br />
            Street:
            <br />
            City:
            <br />
            State:
            <br />
            Email:
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}> <SiennaAvatar variant="avatar" align="right"  />Josh Glatt</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Phone Number:
            <br />
            Industry:
            <br />
            Company:
            <br />
            Street:
            <br />
            City:
            <br />
            State:
            <br />
            Email:
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <TextFields />
    </div>

    
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
