
import React, { Component } from "react";
import { Grid, Row, Col, Table} from "react-bootstrap";
import axios from 'axios';
import Card from "../components/Card/Card";
import UserCard from "../components/UserCard/UserCard";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "../assets/img/faces/vector-01.jpg";
import { nodeURL } from "variables/Variables.jsx";
// import Modal from '../SSComponents/Modal';

class Dashboard extends Component {


  constructor(){
    super()
    this.state = {
      apiData:{},
      packageId:{},
      packageId:{},
      packageStatus:'null',
      userName:'',
      userId:'',
    }
  }
  componentDidMount() {
    const { history } = this.props;
    const tokenD = localStorage.getItem('token');
    if(tokenD=="false"){
      history.push("/")
      // window.location = reactURL;
    }
    const userN = localStorage.getItem('username');
    const userD = localStorage.getItem('password');
    this.setState({userName:userN,userId: userD});
    if(String(userN)=="admin"){
        fetch(nodeURL+'/api/ListPackages')
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
          // console.log("data"+(data[0]))
          this.setState({ apiData: data }, ()=>{
            console.log("callback for setState");
          })
          // console.log(data);
        })
        .catch(console.log)
    }
    else{
      console.log("inside else"+userN)
      fetch(nodeURL+'/api/ListPackagesByHolder?packageHolder='+String(userN))
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
        // console.log("data"+(data[0]))
        this.setState({ apiData: data }, ()=>{
          console.log("callback for setState");
        })
        // console.log(data);
      })
      .catch(console.log)
    }
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
    
    axios.get(nodeURL+`/api/ListPackagesById?packageId=`+user.packageId+'', 
    { headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
    )
    .then(res => {
      console.log(res.data[0]["status"]);
      if(res.data[0]["status"]==0){
          var statusText = "Tampered"
      }
      if(res.data[0]["status"]==1){
          var statusText = "Ok"
      }
      this.setState({
                  packageStatus: statusText
      },()=>{
        console.log("set status for get package by ID: "+this.state.packageStatus)
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
                    category="Query Status of a Package by its packageID"                
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
                            name: "cName",
                            required : true
                          }
                        ]}
                      />       
                      {/* <Button bsStyle="success" pullRight fill type="submit" onClick={() => this.displayModal()}>
                        Submit
                      </Button> */}
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
                    category="The table below lists all packages along with basic package data such as Package ID and Package Status."
                    ctTableFullWidth
                    ctTableResponsive
                    content={
                      <Table striped hover>
                        <thead>
                          <tr>
                            <th>Package ID</th>
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
