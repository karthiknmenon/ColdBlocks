
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";

class SupplierList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      sId:{},
      sName:{}
    }
  }
  
  nameChange = event => {
    console.log("Ivnoked nameChange Event handleChange: "+event.target.value);
    this.setState({ sName: event.target.value });

  }

  idChange = event => {
    console.log("Invoked idChange Event handleChange: "+event.target.value);
    this.setState({
                    sId: event.target.value });

  }
 
  handleSubmit = event => {
    event.preventDefault();
    
    console.log("state "+this.state.sId);
    console.log("state "+this.state.sName);
    const user = {
      sId: String(this.state.sId),
      sName: String(this.state.sName)
    };
    console.log("user "+user.sId);
    console.log("user "+user.sName);
    
    axios.post(nodeURL+`/api/CreateSupplier`, 
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
    fetch(nodeURL+'/api/ListSuppliers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ apiData: data })
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
                title="Add Supplier"
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
                          label: "Supplier ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Supplier ID",
                          onChange:this.idChange,
                          name: "sId"
                        },
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Supplier Name",
                          onChange:this.nameChange,
                          name: "sName"
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
                title="Supplier Details"
                category="Supplier Details with ID and Name"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Supplier ID</th>
                        <th>
                          Supplier Name
                        </th>
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.supplierID}</td>
                            <td>{object.supplierName}</td>
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

export default SupplierList;
