import React, { Component } from 'react';

import { withAuthorization } from '../Session';
import API from '../../utils/API';

class HomePage extends Component{
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  loadProfile(){
    this.props.firebase.users().on('value', snapshot => {
      this.setState({
        users: snapshot.val(),
      });
    }).then(
      API.getUser({fullName: this.state.users})
      .then(res =>
        this.setState({ books: , title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err))
    )
    
  }

  render(){
    return <div>

    </div>
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);