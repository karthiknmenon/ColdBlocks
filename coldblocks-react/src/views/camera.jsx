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
              <Webcam videoConstraints={videoConstraints} />;
            </>
          </Row>
        </Col>
      </Grid>
          
    )
  }
}

export default WebcamCapture;