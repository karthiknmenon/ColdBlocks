
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";
import * as ReactBootstrap from 'react-bootstrap';
import 'remixicon/fonts/remixicon.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
class SupplierList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      sId:{},
      sName:{},
      fetchId: '',
      fetchName: '',
      loading:true,
      editId:''
    }
    // this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
    this.fHandleClose = this.fHandleClose.bind(this);
    this.fetchHandleClose = this.fetchHandleClose.bind(this);
    this.editHandleClose = this.editHandleClose.bind(this);
		this.state = {
      show: false,
      fShow: false,
      fetchShow: false,
      editShow:false
		};
  }
  
  nameChange = event => {
    console.log("Ivnoked nameChange Event handleChange: "+event.target.value);
    this.setState({ sName: event.target.value });

  }

  idChange = event => {
    console.log("Invoked idChange Event handleChange: "+event.target.value);
    this.setState({
                    sId: event.target.value });

  }
  fetchHandleChange = event => {
    this.setState({
        fetchId : event.target.value
    })
  }
 
  handleSubmit = event => {
    event.preventDefault();
    console.log("edit Id: "+this.state.editId)
    console.log(event.target.name)
    if(event.target.name=="editInfo"){
      console.log("edit details")
      const user = {
        supplierId: String(this.state.editId),
        supplierName: String(this.state.sName)
      }
      this.setState({loading: true}, ()=>{
        console.log("loader until fetch new data")
      })
      axios.post(nodeURL+`/editSupplier/`,
      { headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
      {data : user})
      .then(res => {
        console.log(res.data);
        if(res.data=="success"){ 
          this.setState({ show: true, editShow:false }, ()=>{
          console.log("Set State for Show")
          });  
        }
        else{
          this.setState({ fShow: true }, ()=>{
            console.log("Set State for Show")
          });  
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    else{
      const user = {
        sId: String(this.state.sId),
        sName: String(this.state.sName)
      };
      this.setState({loading: true}, ()=>{
        console.log("loader until fetch new data")
      })

      axios.post(nodeURL+`/api/CreateSupplier`, 
      { headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
      { data: user})
      .then(res => {
        console.log(res.data);
        if(res.data=="success"){ 
          this.setState({ show: true }, ()=>{
          console.log("Set State for Show")
          });  
        }
        else{
          this.setState({ fShow: true }, ()=>{
            console.log("Set State for Show")
          });  
        }
      })
      .catch(function (error) {
        console.log(error);
      })  
    } 
  }
  // To query wrt ID 
  fetchHandleSubmit =  async event => {
    event.preventDefault();
    const user = {
      sID: String(this.state.fetchId)
    };
    axios.get(nodeURL+'/api/ListSuppliersId?sID='+user.sID)
    .then(res => {
        // console.log(res)
        var data = res.data
        console.log(data.status);
        if(data.status=="error"){
                this.setState({
                  fShow: true
              })  
        }else{
            this.setState({
            fetchShow: true, fetchName : data.supplierName
          }) 
        }
             
    })
  
  }
  fetchData(){
    fetch(nodeURL+'/api/ListSuppliers')
    .then(res => res.json())
    .then((data) => {
      this.setState({loading: false, apiData: data })
      // console.log(data);
    })
    .catch(console.log)
  }
    // for PUT request to update
    editInfo = event => {
      console.log(event.target.value)
      this.setState({
        editId: event.target.value, editShow: true
      })
    }
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListSuppliers')
    .then(res => res.json())
    .then((data) => {
      this.setState({loading: false, apiData: data })
    })
    .catch(console.log)
  }
  handleClose() {
    this.setState({ show: false });
    this.fetchData();
	}
  fHandleClose() {
    this.setState({ fShow: false });
    this.fetchData();
  }
  fetchHandleClose() {
    this.setState({ fetchShow: false });
    this.fetchData();
  }
  editHandleClose() {
    this.setState({ editShow: false });
    this.fetchData();
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
        <Modal show={this.state.fetchShow} onHide={this.fetchHandleClose}
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Supplier Found</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <i className="ri-user-search-line ri-10x text-success"></i>
            <p className="text-success"><b>Success</b></p>
            <p className="text-dark">Supplier with Supplier-ID <b>{this.state.fetchId}</b> found with Name <b>{this.state.fetchName}</b></p>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={this.fetchHandleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.editShow} onHide={this.editHandleClose}
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Edit Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="text-center">
            <i className="ri-edit-box-line ri-5x text-dark"></i>
            <p className="text-muted">Edit Supplier Information</p>
            </Row>
            <form onSubmit={this.handleSubmit} name="editInfo" >
                      <FormInputs 
                        ncols={["col-md-6", "col-md-6"]}
                        properties={[
                          {
                            label: "Supplier ID",
                            type: "text",
                            bsClass: "form-control",
                            defaultValue:this.state.editId,
                            disabled:true                          
                          },
                          {
                            label: "Name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Supplier Name",
                            onChange:this.nameChange,
                            name: "dName",
                            
                          }
                        ]}
                      />       
                      <div className="clearfix" />
                      <Button bsStyle="success" fill type="submit" >
                        Submit
                      </Button>
              </form>
          </Modal.Body>
        </Modal>
        <Grid fluid>
            <Row>
            <Col md={12}>
              <Card
                title="Add Supplier"
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
                          label: "Supplier ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Supplier ID",
                          onChange:this.idChange,
                          name: "sId",
                          required : true
                        },
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Supplier Name",
                          onChange:this.nameChange,
                          name: "sName",
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
            <Col md={4}>
              <Card
                title="Query Supplier"
                category="Query Supplier wrt Supplier ID"
                content={
                  <form onSubmit={this.fetchHandleSubmit} >
                    <FormInputs 
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Supplier ID",
                          type: "text",
                          bsClass: "form-control",
                          onChange: this.fetchHandleChange,
                          placeholder: "Enter Supplier ID",                             
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
            <Col md={8}>
              <Card
                title="Supplier Details"
                category="Supplier Details with ID and Name"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <>
                  {/* use boolean logic for loader or data */}
                    {
                      this.state.loading ? <Loader
                      className="text-center"
                      type="Rings"
                      color="#757575"
                      height={100}
                      width={100}
                      //3 secs
          
                    /> : <Table striped hover>
                    <thead>
                      <tr>
                        <th>Supplier ID</th>
                        <th>
                          Supplier Name
                        </th>
                        <th className="text-center">
                          Edit
                        </th>
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.supplierID}</td>
                            <td>{object.supplierName}</td>
                            <td className="text-center"><Button bsStyle="warning" bsSize="xs" value={object.supplierID} onClick={this.editInfo}>Edit</Button>{' '}</td>
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

export default SupplierList;
