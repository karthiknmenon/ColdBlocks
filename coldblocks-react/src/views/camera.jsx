import React from "react";
import {
  Grid,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
 
class ColdAR extends React.Component {
  render() {
    return (
      <div className="content">
          <Grid fluid>
            <Col md={12}>
              <Row>
              <Card
                  category="ColdAR is an Augmented Reality enabled QR Scanner that allows a user to scan a product QR code to verify its status. A status -ok- means that the package is not tampered, else it's tampered."
                  content={
                    <Button  pullRight bsStyle="primary" href="https://coldblocksar.netlify.com" target="_blank">Launch ColdAR</Button>
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