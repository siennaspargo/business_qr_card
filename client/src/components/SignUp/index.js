import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import API from "../../utils/api";

// to organize our higher-order components. order doesn't matter bc higher order components don't depend on each other
import { compose } from "recompose";

// makes firebase instance available in signupform components props
// import { FirebaseContext } from '../Firebase';
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  phoneNumber: "",
  industry: "",
  city: "",
  state: "",
  company: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  // pass all the form data to the Firebase Auth API via auth interface in firebase class
  onSubmit = event => {
    event.preventDefault();

    const {
      username,
      email,
      phoneNumber,
      industry,
      city,
      state,
      company,
      passwordOne
    } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        });
      })
      .then(() => {
        // console.log({...INITIAL_STATE})
        this.setState({ ...INITIAL_STATE });
        // to redirect the user after successful signup
      })
      .catch(error => {
        this.setState({ error });
      });
    API.createUser({
      fullName: username,
      phoneNumber: phoneNumber,
      city: city,
      state: state,
      email: email,
      industry: industry,
      company: company
    })
      .then(() => {
        this.props.history.push(ROUTES.HOME);
      })
      .catch(err => console.log(err));
  };

  onChange = event => {
    console.log({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      phoneNumber,
      industry,
      city,
      state,
      company,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    // validation, boolean to enable or disable the submit button
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="phoneNumber"
          value={phoneNumber}
          onChange={this.onChange}
          type="text"
          placeholder="Phone Number"
        />
        <input
          name="industry"
          value={industry}
          onChange={this.onChange}
          type="text"
          placeholder="Industry"
        />
        <input
          name="city"
          value={city}
          onChange={this.onChange}
          type="text"
          placeholder="City"
        />
        <input
          name="state"
          value={state}
          onChange={this.onChange}
          type="text"
          placeholder="State"
        />
        <input
          name="company"
          value={company}
          onChange={this.onChange}
          type="text"
          placeholder="Company"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />

        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

// const SignUpForm = withRouter(withFirebase(SignUpFormBase));

// to redirect the user after successful signup, with npm 'compose'

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
