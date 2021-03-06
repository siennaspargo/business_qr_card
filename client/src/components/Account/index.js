import React from "react";

import { withAuthorization, AuthUserContext } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";



const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div align='center' style={{ textDecoration: 'none', color: '#64ffda' }}>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
<br />
        <input type ="file"/>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authuser => !!authuser;

export default withAuthorization(condition)(AccountPage);
