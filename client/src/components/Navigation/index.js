import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

// Material UI
import AppBar from "../Layouts/Header";
import Button from "@material-ui/core/Button";

// import all routes defined in constants file
// give every link component a specific route


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <AppBar>

    <Button>
      <Link style={{ textDecoration: 'none', color: 'yellow' }} to={ROUTES.LANDING}>Landing</Link>
     </Button>

    <Button>
      <Link style={{ textDecoration: 'none', color: 'yellow' }} to={ROUTES.HOME}>Home</Link>
      </Button>

      <Button>
      <Link style={{ textDecoration: 'none', color: 'yellow' }} to={ROUTES.ACCOUNT}>Account</Link>
    </Button>
    <Button>
      <Link style={{ textDecoration: 'none', color: 'yellow' }} to={ROUTES.ADMIN}>Admin</Link>
      </Button>
<Button>
      <SignOutButton />
</Button>
  </AppBar>
);

const NavigationNonAuth = () => (
  <AppBar>
  <ul>
    <li>

      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
  </AppBar>
);

export default Navigation;