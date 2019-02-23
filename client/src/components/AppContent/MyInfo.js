import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Button from "@material-ui/core/Button";

import QRcode from '../QRpart/QRcode'

const styles = theme => ({
  card: {
    
    align: 'center'
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: [900]
  },
  typography: {
    margin: theme.spacing.unit * 2
  }
});

class MyInfoCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} variant="fullWidth">
      
        <CardHeader
          avatar={
            <Avatar aria-label="Name" className={classes.avatar}>
              N
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="My Contact Info"
          subheader="View and Share"
        />
        <CardContent>
          <Typography component="p">
            
            {this.props.user}
            <br /> 
            {this.props.email}
            <br />
            {this.props.phoneNumber}
            <br />
            {this.props.city}
            <br />
            {this.props.state}
            <br />
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add To My Connections">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Scan QR">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {/* nested modal for QR Code Maybe hits Generate API ? */}
             <h1 align='center'>Scan QR to grab my info</h1>

            <QRcode email= {this.props.email}/>

            {/* <CardMedia
              className={classes.media}
              image="https://www.researchgate.net/profile/Bob_Frankston/publication/260992182/figure/fig2/AS:635336644390912@1528487468116/An-example-of-a-QR-code.png"
              title="QR"
            /> */}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

MyInfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyInfoCard);
