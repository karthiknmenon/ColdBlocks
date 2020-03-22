import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { nodeURL } from "variables/Variables.jsx";
 
class SendConsumerData extends Component {
  state = {
    cName: '',
    cID: ''
  }

  nameChange = event => {
    console.log("Ivnoked nameChange Event handleChange: "+event.target.value);
    this.setState({ cName: event.target.value });

  }
  idChange = event => {
    console.log("Invoked idChange Event handleChange: "+event.target.value);
    this.setState({
                    cID: event.target.value });

  }
 
  handleSubmit = event => {
    event.preventDefault();
    
    console.log("state "+this.state.cID);
    console.log("state "+this.state.cName);
    const user = {
      cID: String(this.state.cID),
      cName: String(this.state.cName)
    };
    console.log("user "+user.cID);
    console.log("user "+user.cName);
    
    axios.post(nodeURL+`/api/CreateConsumer`, 
    { headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
    { data: user})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    
  }

  render() {
    return (
      
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add Consumer"
                content={
                  <form onSubmit={this.handleSubmit} >
                    <FormInputs 
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "ColdBlocks",
                          disabled: true
                  
                        },
                        {
                          label: "Consumer ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Consumer ID",
                          onChange:this.idChange,
                          name: "cID"
                        },
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Consumer Name",
                          onChange:this.nameChange,
                          name: "cName"
                        }
                      ]}
                    />       
                    <Button bsStyle="success" pullRight fill type="submit">
                      Submit
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SendConsumerData;
