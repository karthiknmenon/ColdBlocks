import React from "react";
import {
  Grid,
  Row,
  Col,
  Modal
} from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import QrReader from 'react-qr-reader';
import QRCode from "qrcode.react"
import axios from "axios";
import {reactURl, nodeURL} from "../variables/Variables"
class ColdAR extends React.Component {
  constructor(){
    super();
    this.state = {
      result: '',
      show: false,
      pId: '',
    }
    this.handleClose = this.handleClose.bind(this);
  }
  
  // handleScan = (data) => {
  //   if(data){this.setState({
  //     show: true
  //   })}
  // }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  handleClose() {
    this.setState({ show: false });    
  }
  handleSubmit = event => {
    event.preventDefault()
    axios.get(String(this.state.result))
    .then(res => {
        // console.log(res)
        var data = res.data
        console.log(data)        
        this.setState({
          show: true
        })
    }) 
  }
  idChange = event => {
    console.log("Invoked idChange Event handleChange: "+event.target.value);
    this.setState({
                    pId: event.target.value });
  }
  downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    var fileName = String(localStorage.getItem('username')) + String('-'+Math.floor(Math.random() * 101));
    downloadLink.download = fileName+".png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  render() {
    return (
      <div className="content">
        <Modal show={this.state.show} onHide={this.handleClose}
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Transaction Success</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <i className="ri-emotion-laugh-line ri-10x text-success"></i>
            <p className="text-success">Holder Change was Completed Successfully</p>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
      <Grid fluid>       
          <Row>
            <Col md={12}>
              <Card
                  category="ColdAR is an Augmented Reality enabled QR Scanner that allows a user to scan a product QR code to verify its status. A status -ok- means that the package is not tampered, else it's tampered."
                  content={
                    <>
                      {/* // <Button  pullRight bsStyle="primary" href="https://coldblocksar.netlify.com" target="_blank">Launch ColdAR</Button> */}
                      <QrReader
                      delay={300}
                      onError={this.handleError}
                      onScan={this.handleScan}
                      style={{ width: '100%'}}
                    />
                    <br />
                    <Button bsStyle="success" fill pullRight onClick={this.handleSubmit} style={{cursor: "pointer", zIndex:"100"}}>
                            Submit
                    </Button>  
                  </>
                  }
                />
            </Col>
          </Row>
      </Grid>
    </div>          
    )
  }
}

export default ColdAR;