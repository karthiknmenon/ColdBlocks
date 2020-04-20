
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { nodeURL } from "variables/Variables.jsx";
import * as ReactBootstrap from 'react-bootstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
class TemperatureDrop extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      pId : '',
      loading:true
    }
    // this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.fHandleClose = this.fHandleClose.bind(this);
    this.state = {
        show: false,
        fShow: false
    };
  }
  idChange = event => {
    console.log("Invoked idChange Event handleChange: "+event.target.value);
    this.setState({
                    pId: event.target.value });

  }

  fetchData(){
    fetch(nodeURL+'/api/TemperatureDrop')
    .then(res => res.json())
    .then((data) => {
        var length = data.length;
        var i = 0;
        console.log(this.state.pId)        
        var flag = 0;
        while(i<length){
            // console.log(i+" "+data[i].asset.slice(49))
            if(String(data[i].asset.slice(49))==String(this.state.pId)){
              this.setState({ fShow: true, loading: false }, ()=>{
                console.log("Set State for fShow")
              });   
              flag = 0;                          
              break;
            } else{
              flag = 1;
            }            
            i += 1;
      }
      // flag to check if packageID entered exists in TemperatureDrop REST API
      if(flag==1){
        this.setState({ show: true, loading: false }, ()=>{
            console.log("Set State for Show")
        }); 
    }
      // console.log(data);
    })
    .catch(console.log)
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({loading: true}, ()=>{
      console.log("loader until fetch new data")
    })
    this.fetchData()
    
  }
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/TemperatureDrop')
    .then(res => res.json())
    .then((data) => {
      var length = data.length;
      console.log(length)
      var i = 0;
      while(i<length){
            data[i].asset=data[i].asset.slice(49);
            // data[i].timestamp=data[i].timestamp.slice(12,19)+', '+data[i].timestamp.slice(0,10);
            data[i].timestamp = new Date(data[i].timestamp)            
          // console.log("inside while status: 0")          
            i += 1;
      }
      data = data.sort((a, b) => b.timestamp - a.timestamp)
      var j=0;
      while(j<data.length){
        data[j].timestamp = String(data[j].timestamp).slice(0,25)
        j+=1;
      }
      this.setState({ apiData: data })
      console.log(data);
    })
    .catch(console.log)
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
                    <Modal.Title id="contained-modal-title-vcenter">Not Tampered</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <i className="ri-emotion-laugh-line ri-10x text-success"></i>
                    <p className="text-success">The Package is of Optimal Quality</p>
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
                    <Modal.Title id="contained-modal-title-vcenter">Package Tampered</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <i className="ri-emotion-unhappy-line ri-10x text-danger"></i>
                    <p className="text-danger">The Package is not of Optimal Quality</p>
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
                title="Query Temperature Drop Events"
                content={
                  <form onSubmit={this.handleSubmit} >
                    <FormInputs 
                      ncols={["col-md-6", "col-md-6"]}
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
                          label: "Package ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Package ID",
                          onChange:this.idChange,
                          name: "pId",
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
                  title="Temperature Drop Event"
                  category="Details about package along with package ID, Location, Temperature and Timestamp  when the package was not transported in optimal conditions"
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
                          <th>Package Id</th>
                          <th>Location</th>
                          <th>Temperature</th>
                          <th>TimeStamp</th>
                        </tr>

                      </thead>
                      <tbody>                     
                        {Array.isArray(apiData) && apiData.map(object => (
                          <>
                            <tr>
                              <td>{object.asset}</td>
                              <td>{object.newLocation}</td>
                              <td>{object.newTemperature}</td>
                              <td>{object.timestamp}</td>
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

export default TemperatureDrop;
