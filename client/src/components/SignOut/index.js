import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';

// Firebase
import { withFirebase } from '../Firebase';

// MaterialUI
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});



const SignOutButton = ({ firebase }) => (
  <Button style={{ textDecoration: 'none', color: '#64ffda' }} type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);