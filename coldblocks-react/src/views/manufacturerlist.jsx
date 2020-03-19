
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';

class ManufacturerList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      mId:{},
      mName:{}
    }
  }

  nameChange = event => {
    console.log("Ivnoked nameChange Event handleChange: "+event.target.value);
    this.setState({ mName: event.target.value });

  }

  idChange = event => {
    console.log("Invoked idChange Event handleChange: "+event.target.value);
    this.setState({
                    mId: event.target.value });

  }
 
  handleSubmit = event => {
    event.preventDefault();
    
    console.log("state "+this.state.mId);
    console.log("state "+this.state.mName);
    const user = {
      mId: String(this.state.mId),
      mName: String(this.state.mName)
    };
    console.log("user "+user.mId);
    console.log("user "+user.mName);
    
    axios.post(`http://localhost:4000/api/CreateManufacturer`, 
    { headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}},
    { data: user})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    
  }
  componentDidMount() {
    // console.log("hi");
    fetch('http://localhost:4000/api/ListManufacturers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ apiData: data })
      console.log(data);
    })
    .catch(console.log)
  }

  render() {
    const {apiData} = this.state;
    return (
        <div className="content">
          <Grid fluid>
            <Row>
            <Col md={12}>
              <Card
                title="Add Manufacturer"
                content={
                  <form onSubmit={this.handleSubmit} >
                    <FormInputs 
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
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
                          label: "Manufacturer ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Manufacturer ID",
                          onChange:this.idChange,
                          name: "mId"
                        },
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Manufacturer Name",
                          onChange:this.nameChange,
                          name: "mName"
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
        </Grid>
        <Grid fluid>
          <Row>
            <Col md={12}>
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

export default ManufacturerList;
