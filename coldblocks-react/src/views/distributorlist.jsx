
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";
import * as ReactBootstrap from 'react-bootstrap';
import 'remixicon/fonts/remixicon.css'

class DistributorList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      dName: '',
      dId: '',
      postD: 0
    }
    // this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			show: false,
		};
  }

  nameChange = event => {
    console.log("Ivnoked nameChange Event handleChange: "+event.target.value);
    this.setState({ dName: event.target.value });

  }
  idChange = event => {
    console.log("Invoked idChange Event handleChange: "+event.target.value);
    this.setState({
                    dId: event.target.value });

  }
 
  handleSubmit = event => {
    event.preventDefault();
    
    // console.log("state "+this.state.dId);
    // console.log("state "+this.state.dName);
    const user = {
      dId: String(this.state.dId),
      dName: String(this.state.dName)
    };
    // console.log("user "+user.dId);
    // console.log("user "+user.dName);
    this.setState({ show: true }, ()=>{
      console.log("Set State for Show")
    });  
    
    axios.post(nodeURL+`/api/CreateDistribtuor`, 
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
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListDistributors')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.setState({ apiData: data })
    })
    .catch(console.log)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.postD !== this.state.postD) {
      console.log('postD state has changed.');
      fetch(nodeURL+'/api/ListDistributors')
      .then(res => res.json())
      .then((data) => {
        this.setState({ apiData: data },
          ()=>{
            console.log("callback function")
            console.log(this.state.apiData);
          })
      })
      .catch(console.log)
    }
  }
  handleClose() {
    this.setState({ show: false });
    window.location.reload();
	}

	// handleShow() {
	// 	this.setState({ show: true });
	// }
  render() {
    const {apiData} = this.state;
    var Modal = ReactBootstrap.Modal;
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
            <p className="text-success">Transaction Was Completed Successfully</p>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
          <Grid fluid>
            <Row>
            <Col md={12}>
              <Card
                title="Add Distributor"
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
                          label: "Distributor ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Distributor ID",
                          onChange:this.idChange,
                          name: "dId",
                          required : true
                        },
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Distributor Name",
                          onChange:this.nameChange,
                          name: "dName",
                          required : true
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
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Distributor Details"
                category="Distributor Details with ID and Name"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Distributor ID</th>
                        <th>
                          Distributor Name
                        </th>
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.distributorID}</td>
                            <td>{object.distributorName}</td>
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

export default DistributorList;
