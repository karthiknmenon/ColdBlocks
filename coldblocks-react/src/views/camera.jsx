import React from "react";
import Webcam from "react-webcam";
import {
    Grid,
    Row,
    Col,
  } from "react-bootstrap";
 
class WebcamCapture extends React.Component {
     
     render() {
        const videoConstraints = {
            facingMode: { exact: "environment" }
          };
      return <Webcam videoConstraints={videoConstraints} />;
    }
  }

  export default WebcamCapture;