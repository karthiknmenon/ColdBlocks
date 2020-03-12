
import React, { Component } from "react";
import { Grid, Row, Col, Table, Image} from "react-bootstrap";
import logo from "assets/img/logo-png.png";
import Card from "../components/Card/Card";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
// import Image from 'react-bootstrap/Image'

class Login extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
              <Row>
                <Col md={12} className="text-center">
                <Card
               
                content={
                  <Image src={logo}  height="300" width="300"/>
                }
                />                    
                </Col>
              </Row>
        </Grid>
        <Grid fluid>
              <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                <Card
                
                    title="Login"
                    category="Enter Auth Info for ColdDash"                
                    content={
                      <form onSubmit={this.handleSubmit} >
                      <FormInputs 
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "User-ID",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Enter User ID",
                            defaultValue: "ColdBlocks",
                            // disabled: true
                    
                          },
                        ]}
                      />  
                       <FormInputs 
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Password",
                            type: "password",
                            bsClass: "form-control",
                            placeholder: "Enter Password",
                            defaultValue: "ColdBlocks",
                            // disabled: true
                    
                          },
                        ]}
                      />       
                      <Button bsStyle="success" pullRight fill type="submit" href="/admin/dashboard">
                        Submit
                      </Button>
                      <div className="clearfix" />
                    </form>
                    }
                  />
                </Col>
                <Col lg={3}></Col>
            </Row>
          {/* <Row className="text-center">
            <Col lg={12} sm={12}>
            <div className="logo-img">
              <Image src={logo}  fluid />
            </div>
            </Col>
          </Row> */}
        </Grid>
      </div>
    );
  }
}

export default Login;
