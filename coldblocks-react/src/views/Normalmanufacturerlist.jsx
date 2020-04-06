
import React, { Component } from "react";
import { Grid, Row, Col, Table, Modal } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { nodeURL } from "variables/Variables.jsx";
import axios from "axios";
class NormalManufacturerList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      mId:{},
      mName:{},
      fetchId: '',
      fetchName: '',  
      fetchShow: false    
    }
    this.fetchHandleClose = this.fetchHandleClose.bind(this);
  }
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListManufacturers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ apiData: data })
      console.log(data);
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
      mID: String(this.state.fetchId)
    };
    axios.get(nodeURL+'/api/ListManufacterersId?mID='+user.mID)
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
            fetchShow: true, fetchName : data.manufacturerName
          }) 
        }
             
    })  
  }
  fetchData(){
    fetch(nodeURL+'/api/ListManufacturers')
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
            <Modal.Title id="contained-modal-title-vcenter">Manufacturer Found</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <i className="ri-user-search-line ri-10x text-success"></i>
            <p className="text-success"><b>Success</b></p>
            <p className="text-dark">Manufacturer with Manufacturer-ID <b>{this.state.fetchId}</b> found with Name <b>{this.state.fetchName}</b></p>
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
                title="Query Consumer"
                category="Query Consumer wrt Consumer ID"
                content={
                  <form onSubmit={this.fetchHandleSubmit} >
                    <FormInputs 
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Consumer ID",
                          type: "text",
                          bsClass: "form-control",
                          onChange: this.fetchHandleChange,
                          placeholder: "Enter Consumer ID",                             
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
                  title="Manufacturer Details"
                  category="Manufacturer Details with ID and Name"
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table striped hover>
                      <thead>
                        <tr>
                          <th>Manufacturer ID</th>
                          <th>
                            Manufacturer Name
                          </th>
                        </tr>

                      </thead>
                      <tbody>                     
                        {Array.isArray(apiData) && apiData.map(object => (
                          <>
                            <tr>
                              <td>{object.manufacturerID}</td>
                              <td>{object.manufacturerName}</td>
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

export default NormalManufacturerList;
