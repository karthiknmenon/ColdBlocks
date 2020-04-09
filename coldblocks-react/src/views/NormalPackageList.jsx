
import React, { Component } from "react";
import { Grid, Row, Col, Table, Modal, ModalBody, ModalHeader, ModalFooter } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";
class NormalPackageList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      packageDestination:'',
      packageHolder:'',
      packageId:'',
      fetchShow: false,
    }
    this.fetchHandleClose = this.fetchHandleClose.bind(this);
  }
  fetchHandleChange = event => {
    console.log("Invoked fetch ID change: "+event.target.value);
    this.setState({
            fetchId: event.target.value
    })
  }

  // To query wrt ID 
  fetchHandleSubmit =  async event => {
    event.preventDefault();
      const user = {
        pId: String(this.state.fetchId)
      };
      axios.get(nodeURL+`/api/ListPackagesById?packageId=`+user.pId)
      .then(res => {
          console.log(res)
          var data = res.data
          console.log(data.status);
          if(res.data.length==0){
                  this.setState({
                    fShow: true
                }, () => {console.log("error duing fetch")})  
          }else{
              console.log(JSON.stringify(data))
              // data = JSON.stringify(data)
              this.setState({
              fetchShow: true, fetchDetails : 'Location: '+data[0].location+", Holder: "+data[0].holder+", Temperature: "+data[0].temperature+", Destination: "+data[0].destination
            }, () => {console.log("fetch Details "+JSON.stringify(this.state.fetchDetails))}) 
          }
          
      })  
    }
  componentDidMount() {
    // console.log("hi");
    var pHolder = localStorage.getItem('username')
    fetch(nodeURL+'/api/ListPackagesByHolder?packageHolder='+pHolder)
    .then(res => res.json())
    .then((data) => {
      var JSONdata = JSON.stringify(data);
      var length = data.length;
      console.log(length)
      var i = 0;
      while(i<length){
        if(data[i].status==0){
            data[i].status="Tampered";
          // console.log("inside while status: 0")          
        }
        else{
          data[i].status="Ok";
        }
        i+=1;
      }
      this.setState({ apiData: data })
      console.log(data);
    })
    .catch(console.log)
  }

  fetchHandleClose() {
    this.setState({ fetchShow: false });    
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
            <Modal.Title id="contained-modal-title-vcenter">Package Found</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <i className="ri-truck-fill ri-10x text-success"></i>
            <p className="text-success"><b>Success</b></p>
            <p className="text-dark">Package with Package-ID <b>{this.state.fetchId}</b> found with <b>{this.state.fetchDetails}</b></p>
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
                title="Query Package"
                category="Query Pacakge wrt Package ID"
                content={
                  <form onSubmit={this.fetchHandleSubmit} >
                    <FormInputs 
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Package ID",
                          type: "text",
                          bsClass: "form-control",
                          onChange: this.fetchHandleChange,
                          placeholder: "Enter Package ID",                             
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
                title="Package Details"
                category="Complete Package Details"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Package ID</th>
                        <th>
                          Package Location
                        </th>
                        <th>
                          Package Holder
                        </th>
                        <th>
                          Package Temperature
                        </th>
                        <th>
                          Package Destination
                        </th>
                        <th>
                          Package Status
                        </th>
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.packageID}</td>
                            <td>{object.location}</td>
                            <td>{object.holder}</td>
                            <td>{object.temperature}</td>
                            <td>{object.destination}</td>
                            <td>{object.status}</td>
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

export default NormalPackageList;
