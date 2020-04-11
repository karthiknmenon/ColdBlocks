
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
import { reactURL, nodeURL } from "variables/Variables.jsx";

// **TODO** Custom CSS for logIn
import "../assets/css/auth.css"

class Login extends Component {
  state = {
    username: '',
    password: '',
    url: reactURL,
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
    const { history } = this.props;
    const user = {
      password: String(this.state.password),
      username: String(this.state.username)
    };
    axios.post(nodeURL+`/?username=`+user.username+`&password=`+user.password+``)
    .then(res => {
      if(res.data=="success"){
        if(user.username=="admin"){
          console.log("admin");
          history.push('/admin/dashboard');
            //   this.setState({
            //     url: reactURL+'/admin/dashboard'
            // })
        }
        else if(user.username==/S[0-9]*/){
          history.push('/supplier/dashboard');
          //   this.setState({
          //     url: reactURL+'/supplier/dashboard'
          // })
        }
        else if(user.username==/D[0-9]*/){
          history.push('/distributor/dashboard');
          //   this.setState({
          //     url: reactURL+'/distributor/dashboard'
          // })
        }
        // if(user.username=="C01"){
        else{
          history.push('/consumer/dashboard');
          //   this.setState({
          //     url: reactURL+'/consumer/dashboard'
          // })
        }

      //  save auth info in local storage
      localStorage.setItem('username', user.username);
      localStorage.setItem('password', user.password);
      localStorage.setItem('token', "true");
      // window.location = this.state.url;  

      // save auth info for holder-change
      axios.post(nodeURL + "/getUserCred",
        { headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
        { data : user})
        .then( res => {
            console.log("getCred done");
        })
        .catch(function (error){
          console.log("error")
        })
      }

      else{

          history.push('/');

          //   this.setState({
          //     url: reactURL    
          // })            

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
          console.log("inside else")
        }
        
        // res.redirect(this.state.url)              
        // console.log(" inside else  url: "+this.state.url);
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
                      <>
                          <form onSubmit={this.handleSubmit}>
                          <FormInputs 
                            ncols={["col-md-12"]}
                            properties={[
                              {
                                label: "User-ID",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Enter User-ID",                            
                                onChange:this.nameChange,
                                name: "username"                                                
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
                                onChange:this.passChange,
                                name: "password"                                                
                              },
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
                  <p className="text-center text-muted" style={{margin:"0"}}>ColdDash - A Curated Dashboard for ColdBlocks</p>
                </Col>
                <Col lg={3}></Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
