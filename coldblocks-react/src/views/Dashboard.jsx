
import React, { Component } from "react";
import { Grid, Row, Col, Table, Image} from "react-bootstrap";
import axios from 'axios';
import logo from "assets/img/logo-png.png";
import Card from "../components/Card/Card";
import UserCard from "../components/UserCard/UserCard";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "../assets/img/faces/face-0.jpg";
// import Image from 'react-bootstrap/Image'

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      apiData:{},
      packageId:{}
    }
  }
  componentDidMount() {
    // console.log("hi");
    fetch('http://localhost:4000/api/ListPackages')
    .then(res => res.json())
    .then((data) => {
      this.setState({ apiData: data })
      // console.log(data);
    })
    .catch(console.log)
  }
  idChange = event => {
    console.log("Invoked idChange Event handleChange: "+event.target.value);
    this.setState({
                    packageId: event.target.value });

  }
  render() {
    const {apiData} = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
                  <UserCard
                    bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                    avatar={avatar}
                    name="Karthik Menon"
                    userName="S101"
                    description={
                      <span>
                      Add some description like etc etc etc.
                      </span>
                    }
                    // socials={
                    //   <div>
                    //     <Button simple>
                    //       <i className="fa fa-facebook-square" />
                    //     </Button>
                    //     <Button simple>
                    //       <i className="fa fa-twitter" />
                    //     </Button>
                    //     <Button simple>
                    //       <i className="fa fa-google-plus-square" />
                    //     </Button>
                    //   </div>
                    // }
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                <Card
                    title="Package Data"
                    category="Data about all Transit Packages"
                    ctTableFullWidth
                    ctTableResponsive
                    content={
                      <Table striped hover>
                        <thead>
                          <tr>
                            <th>Package ID</th>
                            {/* <th>Destination</th> */}
                            <th>Status</th>
                          </tr>

                        </thead>
                        <tbody>                     
                          {Array.isArray(apiData) && apiData.map(object => (
                            <>
                              <tr>
                                <td>{object.packageID}</td>
                                {/* <td>{object.destination}</td> */}
                                <td>{object.status}</td>
                              </tr>
                            </>
                          ))}
                        </tbody>
                      </Table>
                    }
                  />
                </Col>
                <Col lg={6}>
                <Card
                    title="Package Status"
                    category="Query Status of a Package by its ID"                
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
                            label: "Pakcage ID",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Enter Package ID",
                            onChange:this.idChange,
                            name: "cName"
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
          {/* <Row className="text-center">
            <Col lg={12} sm={12}>
            <div className="logo-img">
              <Image src={logo}  fluid />
            </div>
            </Col>
          </Row> */}
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
