import React, { Component } from "react";
// Material UI
import Button from "@material-ui/core/Button";

class QRcode extends Component {
  state = {
    // add person's info from the database
    urlInfo: ""
  };

  // Handles encoded username
  handleGenerator = () => {
    var username = encodeURI(this.props.email);
    var apiUrl =
      "https://api.qrserver.com/v1/create-qr-code/?data=" +
      username +
      "&size=100x100";
    this.setState({ urlInfo: apiUrl });
  };

  renderCode = () => {
    if (this.state.urlInfo !== "") {
      return (
        <div className="text-center">
          <img
            alt="User's QR Code"
            className="img-fluid"
            src={this.state.urlInfo}
            style={{ margin: "0 auto" }}
          />
        </div>
      );
    } else {
      return ;
    }
  };

  render() {
    return (
      <div align='center'>
        <div className="card text-center">
          <div className="card-header">
            
          </div>
          <div className="card-body" >{this.renderCode()}</div>
        </div>
        <Button onClick={this.handleGenerator} className="btn btn-primary">
        Generate QR code
        </Button>
      </div>
    );
  }
}

export default QRcode;
