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
      result: 'No result',
      show: false,
      pId: '',
    }
    this.handleClose = this.handleClose.bind(this);
  }
  
  handleScan = (data) => {
    if(data=="success")
    {this.setState({
      show: true
    })}
  }
  handleError = err => {
    console.error(err)
  }
  handleClose() {
    this.setState({ show: false });    
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
                category="Generate QR-Code for HolderChange Event. Download and Print the QR-Code on the Package. QR-Code changes dynamically on input of Package-ID"
                content={
                  <>   
                    <form onSubmit={this.handleSubmit} name="editInfo" >
                      <FormInputs 
                        ncols={["col-md-6", "col-md-6"]}
                        properties={[
                          {
                            label: "Company",
                            type: "text",
                            disabled: true,
                            defaultValue : "ColdBlocks",
                            bsClass: "form-control",                                                               
                          },
                          {
                            label: "Package ID",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Package ID",
                            onChange:this.idChange,
                            name: "packageId",                            
                          },
                        ]}
                        />       
                        <div className="clearfix" />
                        {/* <Button bsStyle="success" fill type="submit" >
                          Submit
                        </Button> */}
                    </form>
                    <hr />
                    <div  className="text-center">
                      <QRCode
                        id="123456"
                        value={nodeURL+"/qrHolderChange?packageID="+this.state.pId}
                        size={290}
                        level={"H"}
                        includeMargin={true}
                      /> <br />
                      <Button bsStyle="success" fill onClick={this.downloadQR}>
                          Download QR
                      </Button>                                                  
                    </div>                             
                </>
                }
              />
          </Col>
        </Row>
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
                    {/* <p className="text-muted text-center">{this.state.result}</p> */}
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