import React from "react";
import {
  Grid,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import QrReader from 'react-qr-reader'
class ColdAR extends React.Component {
  state = {
    result: 'No result'
  }
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
  render() {
    return (
      <div className="content">
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
                <p className="text-muted text-center">{this.state.result}</p>
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