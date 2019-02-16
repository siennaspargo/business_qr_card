import React, { Component } from 'react';
import { compose } from 'recompose';


import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import API from '../../utils/API';
import RecipeReviewCard from "./../AppContent/MyInfo";
import Expansion from "./../AppContent/Expansion";

class HomePage extends Component{
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      users: null,
      email: '',
      phoneNumber: "",
      industry: "",
      city: "",
      state: "",
      company: ""
    };
  }
  

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.setState({
        users: snapshot.val(),
      });
      
    })
    
    console.log(this.state.users)

    // this.loadProfile(this.state.email)
    // this.props.firebase.auth().onAuthStateChanged(function(user) {
    //   this.setState({ users: user}); // user is undefined if no user signed in
    //  });
  };

  componentWillUnmount() {
    this.props.firebase.users().off();
  };

  loadProfile(email){
      API.getUser({email: this.state.email})
      .then(res => {
        console.log(res.data)
        this.setState({users: res.data.fullName, phone: res.data.phoneNumber, industry: res.data.industry, city: res.data.state, company: res.data.company, id: res.data._id })
      })
      .catch(err => console.log(err))
  };

  render(){
    return <div>
      {this.state.users}
      {this.state.email}
      {this.state.phoneNumber}
      {this.state.industry}
      {this.state.city}
      {this.state.state}

    <RecipeReviewCard 
    users= {this.state.users} 
    email= {this.state.email} 
    phoneNumber= {this.state.phoneNumber} 
    industry= {this.state.industry} 
    city= {this.state.city} 
    state= {this.state.state}
    company= {this.state.company}  
    />
    <Expansion />
    </div>
  }
};

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(HomePage);