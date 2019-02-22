import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function Connections () {

    return (
    <div className={this.props.root}>
    {this.props.contacts.map(connection => {
              return(
              <ExpansionPanel>

                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={this.props.heading}></Typography>
                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails>
                      <Typography>
                          Phone Number:
                          Industry:
                          Company:
                          Street:
                          City:
                          State:
                          Email:
                        </Typography>
                  </ExpansionPanelDetails>
                  
             
      </ExpansionPanel>
      );
      })} 
    </div>
  );
}

Connections.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Connections);
