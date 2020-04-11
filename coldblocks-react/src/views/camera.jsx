import React from "react";
import {
  Grid,
  Row,
  Col,
  Button,
  Modal
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import QrReader from 'react-qr-reader';
import axios from "axios";
import {reactURl, nodeURL} from "../variables/Variables"
class ColdAR extends React.Component {
  constructor(){
    super();
    this.state = {
      result: 'No result',
      show: false,
    }
    this.handleClose = this.handleClose.bind(this);
  }
  
  handleScan = data => {
    if (data) {      
      axios.get(String(this.state.result))
      .then(res => {
        console.log(JSON.stringify(res.data))
      })
      this.setState({
        result: data, 
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  handleClose() {
    this.setState({ show: false });    
	}
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
        <Col md={12}>
          <Row>
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
          </Row>
        </Col>
      </Grid>
    </div>          
    )
  }
}

export default ColdAR;