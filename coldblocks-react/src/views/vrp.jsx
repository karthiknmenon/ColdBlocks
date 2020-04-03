
import React, { Component } from "react";
import { Grid, Row, Col, Table, Modal } from "react-bootstrap";
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
      loading: false,
    }
      this.handleClose = this.handleClose.bind(this);
      this.fHandleClose = this.fHandleClose.bind(this);      
      this.state = {
        show: false,
        fShow: false,        
      };      
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
          loading: false, apiData : res.data, show: true
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
        this.setState({ loading:false, apiData: res.data, show:false })
      })
  }
  handleClose() {
    this.setState({ show: false });
	}
  fHandleClose() {
    this.setState({ fShow: false });
	}
	// handleShow() {
	// 	this.setState({ show: true });
  // }
  render() {
    const {apiData} = this.state;
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
            <p className="text-success">Distance Matrix Was Successfully Computed</p>
            <Button bsStyle="success" outline type="button" onClick={this.fetchRoute}>
                      Generate Routes
            </Button>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.fShow} onHide={this.fHandleClose}
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Transaction Failed</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <i className="ri-emotion-unhappy-line ri-10x text-danger"></i>
            <p className="text-danger">Transaction Failed</p>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={this.fHandleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
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
                        <th>Vehicle ID</th>
                        <th>Route</th>
                        <th>Distance</th>
                      </tr>

                    </thead>
                    <tbody>                                                           
                    {Array.isArray(apiData) && apiData.map(object => (
                          <>
                          
                            <tr>
                              {/* <td>{object.consumerID}</td> */}
                              
                              <td>{object.vehicleId}</td>
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
