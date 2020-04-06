
import React, { Component } from "react";
import { Grid, Row, Col, Table, Modal } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";
class NormalConsumerList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      cName: '',
      cId: '',
      fetchId: '',
      postD: 0
    }
    this.fetchHandleClose = this.fetchHandleClose.bind(this);
    this.state = {
      fetchShow: false,
    }
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
        cId: String(this.state.fetchId)
      };
      axios.get(nodeURL+`/api/ListConsumerId?cID=`+user.cId)
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
              fetchShow: true, fetchName : data.consumerName
            }) 
          }               
      })  
  }

  fetchHandleClose() {
    this.setState({ fetchShow: false });
    this.fetchData();
  }
  fetchData(){
    fetch(nodeURL+'/api/ListConsumers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ loading: false, apiData: data })
      // console.log(data);
    })
    .catch(console.log)
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
            <Modal.Title id="contained-modal-title-vcenter">Customer Found</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <i className="ri-user-search-line ri-10x text-success"></i>
            <p className="text-success"><b>Success</b></p>
            <p className="text-dark">Customer with Customer-ID <b>{this.state.fetchId}</b> found with Name <b>{this.state.fetchName}</b></p>
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

export default NormalConsumerList;
