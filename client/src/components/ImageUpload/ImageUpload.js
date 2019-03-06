import React, { Component } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';


class App extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('#');
    .then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="Upload">
        <h2>Upload Your Photo</h2>
        <input type='file' onChange={this.fileSelectedHandler} />

        <Button onClick={this.fileUploadHandler}> Upload </Button>
      </div>
    );
  }
}
