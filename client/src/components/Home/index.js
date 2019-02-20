import React, { Component } from 'react';
import { compose } from 'recompose';


import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import API from '../../utils/api';
import RecipeReviewCard from "./../AppContent/MyInfo";
import Expansion from "./../AppContent/Expansion";
// import Modal from "./../AppContent/Modal"

class HomePage extends Component{
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      user: "",
      email: null,
      phoneNumber: "",
      industry: "",
      city: "",
      state: "",
      company: "",
    };
  }
  

  componentDidMount() {
    const currentUser = this.props.firebase.auth.currentUser.email;
    this.setState({email: currentUser})

    this.loadProfile(currentUser)

  };

  componentWillUnmount() {
    // this.props.firebase.users().off();
  };

  loadProfile(email){
    console.log(email)
      API.getUser({email: email})
      .then(res => {
        console.log(res.data[0])
        const data = res.data[0]
        this.setState({user: data.fullName, phoneNumber: data.phoneNumber, industry: data.industry, city: data.city, state: data.state, company: data.company, id: data._id })
      })
      .catch(err => console.log(err))
  };

  render(){
    return <div>

    <p></p>
    <RecipeReviewCard 
    user= {this.state.user} 
    email= {this.state.email} 
    phoneNumber= {this.state.phoneNumber} 
    industry= {this.state.industry} 
    city= {this.state.city} 
    state= {this.state.state}
    company= {this.state.company}  
    />
    <Expansion />
    {/* <Modal /> */}
    </div>
  }
};

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(HomePage);