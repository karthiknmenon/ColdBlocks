
import React, { Component } from "react";
import { Grid, Row, Col, Table, Modal } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { nodeURL } from "variables/Variables.jsx";
import axios from "axios"
class NormalSupplierList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      sId:{},
      sName:{},
      fetchId: '',
      fetchName: '',
      loading:true,
    }
    this.fetchHandleClose = this.fetchHandleClose.bind(this);
    this.state = {            
      fetchShow: false,
		};
  }
  
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListSuppliers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ apiData: data })
    })
    .catch(console.log)
  }
  fetchHandleChange = event => {
    this.setState({
        fetchId : event.target.value
    })
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
  fetchHandleClose() {
    this.setState({ fetchShow: false });
    this.fetchData();
  }
  render() {
    const {apiData} = this.state;
    return (
      <div className="content">
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
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Supplier ID</th>
                        <th>
                          Supplier Name
                        </th>
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.supplierID}</td>
                            <td>{object.supplierName}</td>
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

export default NormalSupplierList;
