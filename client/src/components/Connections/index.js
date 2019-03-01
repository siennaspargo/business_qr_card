import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = {
  root: {
    width: "100%"
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular
  }
};
// class Connections extends Component {

// }
function Connections (props) {
    // const { classes } = props;

    return (
    <div>
    {props.contacts.map(connection => {
              return(
              <ExpansionPanel>

                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className=""></Typography>
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

// Connections.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Connections);
