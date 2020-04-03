
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class vrp extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      vehicleNo: '',
      vehicleLoc: '',
      postD: 0,
      loading: false
    }
  }
  nameChange = event => {
    console.log("Ivnoked nameChange Event handleChange: "+event.target.value);
    this.setState({ vehicleLoc: event.target.value });
  }
  nnumberChange = event => {
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
      vehicleNo : this.state.vehicleNo,
      vehicleLoc : this.state.vehicleLoc
    }
    this.setState({
        loading: true
    })
    await axios.post('http://127.0.0.1:5000/sendLocation', 
    { headers: {    
              "Access-Control-Allow-Origin": "*",
              "Content-Type" : "application/json",
              'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
    { data: user})
    .then(res => {
      // console.log(res);
      console.log(".then for post"+res.data);  
      this.setState({
          loading: false, apiData : res.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })    
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/sendLocation')
      .then(res => {
        this.setState({ apiData: res.data })
      })
    // console.log("hi");
  }
  fetchRoute= event => {
    this.setState({loading: true})
    axios.post('http://127.0.0.1:5000/')
      .then(res => {
        this.setState({ loading:false, apiData: res.data })
      })
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
                      ncols={["col-md-3", "col-md-3","col-md-6"]}
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
                          label: "Vehicle Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Number of Vehicles",
                          onChange:this.nnumberChange,
                          name: "vehicleNo"
                        },
                        {
                          label: "Enter Location",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter Geo Location as CSV",
                          onChange:this.nameChange,
                          name: "vehicleLoc"
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
                  <>
                  <Button bsStyle="success" pullRight fill type="button" onClick={this.fetchRoute}>
                      Submit
                  </Button>
                   {/* use boolean logic for loader or data */}
                   {this.state.loading ? <Loader
                    className="text-center"
                    type="Rings"
                    color="#757575"
                    height={100}
                    width={100}
                    //3 secs
          
                    /> : <Table striped hover>
                    <thead>
                      <tr>
                        <th>Route</th>
                        <th>Distance</th>
                      </tr>

                    </thead>
                    <tbody>                                                           
                    {Array.isArray(apiData) && apiData.map(object => (
                          <>
                          
                            <tr>
                              {/* <td>{object.consumerID}</td> */}
                              
                              <td>{object.route}</td>
                              <td>{object.distance}</td>
                              
                            </tr>
                            
                          </>
                        ))}                                      
                    </tbody>
                  </Table>
                   }
                  </>
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
