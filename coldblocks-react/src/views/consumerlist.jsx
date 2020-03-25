
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";
import * as ReactBootstrap from 'react-bootstrap';
import 'remixicon/fonts/remixicon.css'
class ConsumerList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      cName: '',
      cId: '',
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
    this.setState({ cName: event.target.value });
  }
  idChange = event => {
    console.log("Invoked idChange Event handleChange: "+event.target.value);
    this.setState({
                    cId: event.target.value });
  }
 
  handleSubmit =  async event => {
    event.preventDefault();
    
    // console.log("state "+this.state.cId);
    // console.log("state "+this.state.cName);
    const user = {
      cId: String(this.state.cId),
      cName: String(this.state.cName)
    };

    // console.log("user "+user.cId);
    // console.log("user "+user.cName);
    
    this.setState({ show: true }, ()=>{
      console.log("Set State for Show")
    });  
    
    await axios.post(nodeURL+`/api/CreateConsumer`, 
    { headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
    { data: user})
    .then(res => {
      // console.log(res);
      console.log(".then for post"+res.data);  
    })
    .catch(function (error) {
      console.log(error);
    })    
    this.setState({postD:1},
      ()=>{
        console.log("post callback called"+this.state.postD);
      })   
  }
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListConsumers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ apiData: data })
      // console.log(data);
    })
    .catch(console.log)
  }
  componentDidUpdate(prevProps, prevState) {

    if (prevState.postD !== this.state.postD) {
      console.log("before new fetch"+JSON.stringify(this.state.apiData))
      console.log('postD state has changed. (inside didUpdate now)'+this.state.postD);
      axios.get(nodeURL+`/api/ListConsumers`)
      .then(res => {
        console.log(JSON.stringify(res.data))
        const fetchData = JSON.stringify(res.data);
        this.setState({
          apiData : fetchData
        })
      })
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
                          name: "cId",
                          required : true
                        },
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Consumer Name",
                          onChange:this.nameChange,
                          name: "cName",
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
          <Row>
            <Col md={12}>
              <Card
                title="Consumer Details"
                category="Consumer Details with ID and Name"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Consumer ID</th>
                        <th>
                          Consumer Name
                        </th>
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.consumerID}</td>
                            <td>{object.consumerName}</td>
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

export default ConsumerList;
