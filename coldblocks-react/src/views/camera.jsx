import React from "react";
import Webcam from "react-webcam";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
 
class WebcamCapture extends React.Component {
  render() {
    const videoConstraints = {
      facingMode: "environment"
    };

    return (
      <Grid>
        <Col md={12}>
          <Row>
            <>
              <Card
                title="Cold-AR"
                description={
                  <p>
                  Add some description like etc etc etc.
                  </p>
                }
              >

              </Card>
            </>
          </Row>
        </Col>
      </Grid>
          
    )
  }
}

export default WebcamCapture;