
import React, { Component } from "react";
import { Grid, Row, Col, Table} from "react-bootstrap";
import axios from 'axios';
import Card from "../components/Card/Card";
import UserCard from "../components/UserCard/UserCard";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "../assets/img/faces/face-0.jpg";

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      apiData:{},
      packageId:{},
      packageId:{},
      packageStatus:'null',
      userName:'',
      userId:''
    }
  }
  componentDidMount() {
    // Old code to get parameters from URL
    const query = new URLSearchParams(this.props.location.search);
    const username = query.get('username');
    const userId = query.get('password');
    console.log(username);
    console.log("hi");
    this.setState({userName:username,userId: userId});
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
  handleSubmit = event => {
    event.preventDefault();
    
    console.log("state "+this.state.packageId);
    const user = {
      packageId: String(this.state.packageId)
    };
    console.log("user "+user.packageId);
    
    axios.get(`http://localhost:4000/api/ListPackagesById?packageId=`+user.packageId+'', 
    { headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
    )
    .then(res => {
      console.log(res);
      this.setState({
                  packageStatus: res.data[0]["status"]
      })
      console.log("packageStatus: "+this.state.packageStatus);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  render() {
    const {apiData} = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6}>
                  <UserCard
                    bgImage="https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1484&q=80"
                    avatar={avatar}
                    name={this.state.userName}
                    userName={this.state.userId}
                    description={
                      <span className="text-muted">
                          15 years of experience in local marketing and distribution.
                      </span>
                    }
                  />
                </Col>
                <Col lg={6}>
                <Card
                    title="Package Status"
                    category="Query Status of a Package by its ID"                
                    content={
                      <>
                      <p className="text-muted">The status of package is: {this.state.packageStatus}</p>
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
                    </>
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
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

export default Dashboard;
