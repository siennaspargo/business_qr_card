import React, { Component } from "react";

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
      return <h3>Click Button to Generate QRcode</h3>;
    }
  };

  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">
            <h2>QR Code</h2>
          </div>
          <div className="card-body">{this.renderCode()}</div>
        </div>
        <button onClick={this.handleGenerator} className="btn btn-primary">
        Generate QR code
        </button>
      </div>
    );
  }
}

export default QRcode;
