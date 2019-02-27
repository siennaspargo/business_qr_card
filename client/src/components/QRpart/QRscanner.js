import React, { Component } from "react";
import QrReader from "react-qr-reader";
import API from "../../utils/api"
 
class QRscanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No result",
      camera: false
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  
  addByQR = () => {
    const id = this.props.id;
    const newConnection = this.state.result;
    API.addConnection(id, newConnection)
      .then(res => {
          this.setState({result : "No result"})
      })
      .catch(err => console.log(err))
  }

  showButton = () => {
    if(this.state.result === "No result"){
      return(<div>

      </div>)
    } else {
      return(<div>
        <button onClick={this.addByQR}>Add Connection</button>
      </div>)
    }
  }
  showCamera = () => {
    this.setState({camera: true})
  }
  
  hideCamera = () => {
    this.setState({camera: false})
  }
  renderScan = () => {
    if (this.state.camera === true){
      return(<QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "400px", height: "400px" }}
          showViewFinder={true}
        />)
    } else {
      return(<div>Click button to open camera</div>)
    }
  }
  render() {
    return (
      <div className="card-body">
        {this.renderScan()}
        <button onClick={this.showCamera} className="btn btn-primary">
          Open Camera
        </button>
        <button onClick={this.hideCamera} className="btn btn-primary">
          Hide Camera
        </button>
        <p>{this.state.result}</p>
        {this.showButton()}
      </div>
    );
  }
}

export default QRscanner;