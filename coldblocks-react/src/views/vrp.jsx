
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";


class vrp extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      vehicleNo: '',
      postD: 0
    }
  }
  nameChange = event => {
    console.log("Ivnoked nameChange Event handleChange: "+event.target.value);
    this.setState({ vehicleNo: event.target.value });
  }
 
  handleSubmit =  async event => {
    event.preventDefault();
    
    // console.log("state "+this.state.cId);
    // console.log("state "+this.state.vehicleNo);
    // console.log("user "+user.cId);
    // console.log("user "+user.vehicleNo);
    const user = {
      vehicleNo : this.state.vehicleNo
    }
    await axios.post('http://127.0.0.1:5000/', 
    { headers: {    
              "Access-Control-Allow-Origin": "*",
              "Content-Type" : "application/json",
              'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
    { data: user})
    .then(res => {
      // console.log(res);
      console.log(".then for post"+res.data);  
      this.setState({
          apiData : res.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })    
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/')
      .then(res => {
        this.setState({ apiData: res.data })
      })
    // console.log("hi");
  }

  render() {
    const {apiData} = this.state;
    return (
      <div className="content">
          <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Vehicle Information"
                content={
                  <form onSubmit={this.handleSubmit} >
                    <FormInputs 
                      ncols={["col-md-3", "col-md-9",]}
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
                          label: "Vehicle Capacities",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Vehicle Capacity",
                          onChange:this.nameChange,
                          name: "vehicleNo"
                        },
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
          <Row>
            <Col md={12}>
              <Card
                title="Route Details"
                category="Route Details"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Route</th>
                      </tr>

                    </thead>
                    <tbody>                                                           
                    {Array.isArray(apiData) && apiData.map(object => (
                          <>
                          
                            <tr>
                              {/* <td>{object.consumerID}</td> */}
                              
                              <td>{object.route}</td>
                              
                            </tr>
                            
                          </>
                        ))}                                      
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}



export default vrp;
