
import React, { Component } from "react";
import { Grid, Row, Col, Image} from "react-bootstrap";
import logo from "assets/img/logo-png.png";
import Card from "../components/Card/Card";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { style } from "variables/Variables.jsx";
import NotificationSystem from "react-notification-system";
import 'remixicon/fonts/remixicon.css'
import Footer from "components/Footer/Footer"

// **TODO** Custom CSS for logIn
import "../assets/css/auth.css"

class Login extends Component {
  state = {
    username: '',
    password: '',
    url:'http://localhost:3001/',
    status:'0',
    _notificationSystem: null,
    userName:'',
    userId:''
  }

  
  nameChange = event => {
    // console.log("Ivnoked nameChange Event handleChange: "+event.target.value);
    this.setState({ username: event.target.value });

  }
  
  passChange = event => {
    // console.log("Invoked passChange Event handleChange: "+event.target.value);
    this.setState({
                    password: event.target.value });

  }
 
  handleSubmit = event => {
    event.preventDefault();
    
    // console.log("state "+this.state.password);
    // console.log("state "+this.state.username);
    const user = {
      password: String(this.state.password),
      username: String(this.state.username)
    };
    // console.log("user "+user.password);
    // console.log("user "+user.username);
    
    axios.post(`http://localhost:4000/?username=`+user.username+`&password=`+user.password+``)
    .then(res => {
      if(res.data=="success"){
        if(user.username=="admin"){
              this.setState({
                url: 'http://localhost:3001/admin/dashboard'
            })
        }
        if(user.username=="S01"){
            this.setState({
              url: 'http://localhost:3001/supplier/dashboard'
          })
        }
        if(user.username=="D01"){
            this.setState({
              url: 'http://localhost:3001/distributor/dashboard'
          })
        }
        if(user.username=="C01"){
            this.setState({
              url: 'http://localhost:3001/consumer/dashboard'
          })
        }
    //  save auth info
      localStorage.setItem('username', user.username);
      localStorage.setItem('password', user.password);
      localStorage.setItem('token', "true");
      axios.post(`http://localhost:4000/getUserCred?username=`+user.username, 
      { headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
      {data: String("hi")})
        .then(res => {
          // console.log(res);
          console.log(".then for post username"+res.data);  
        })
        .catch(function (error) {
          console.log(error);
        })  
      window.location = this.state.url;  
      }
      else{
        this.setState({
          url: 'http://localhost:3001'      
      })
      
      
      // call pop-up
      this.setState({ _notificationSystem: this.refs.notificationSystem });
      var _notificationSystem = this.refs.notificationSystem;
      var level = "error"
      _notificationSystem.addNotification({
        title: <span data-notify="icon" className="ri-error-warning-fill" />,
        message: (
          <div>
            Wrong Log-In Info, Please try again.
          </div>
        ),
        level: level,
        position: "tr",
        autoDismiss: 15
      });
      }
      // res.redirect(this.state.url)
      
         
    console.log("url: "+this.state.url);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  componentDidMount(){
    localStorage.setItem('username', "");
      localStorage.setItem('password', "");
      localStorage.setItem('token', "false");
  }
  render() {
    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Grid fluid>
              <Row>
                <Col md={12} className="text-center">
                  <Image src={logo} className="coldblocks-logo"/>                              
                </Col>
              </Row>
        </Grid>
        <Grid fluid>
              <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                <Card
                
                    title="Login"
                    category="Enter Auth Info for ColdDash"                
                    content={
                      <form onSubmit={this.handleSubmit}>
                      <FormInputs 
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "User Name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Enter User Name",
                            // defaultValue: "ColdBlocks",
                            onChange:this.nameChange,
                            name: "username"
                            // disabled: true
                    
                          },
                        ]}
                      />  
                       <FormInputs 
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Password",
                            type: "password",
                            bsClass: "form-control",
                            placeholder: "Enter Password",
                            // defaultValue: "ColdBlocks",
                            onChange:this.passChange,
                            name: "password"
                            // disabled: true
                    
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
                <Col lg={3}></Col>
            </Row>
        </Grid>
        <Footer></Footer>
      </div>
    );
  }
}

export default Login;
