
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { nodeURL } from "variables/Variables.jsx";
import axios from "axios";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
class AdminTransactions extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{}
    }
  }
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListTransactions')
    .then(res => res.json())
    .then((data) => {
      var length = data.length;
      console.log(length)
      var i = 0;
      while(i<length){
          data[i].transactionType=data[i].transactionType.slice(32);
          
          // if(data[i].participantInvoking)
          // {data[i].participantInvoking=data[i].participantInvoking.slice(54);}

          data[i].transactionTimestamp = new Date(data[i].transactionTimestamp)
          data[i].transactionTimestamp = String(data[i].transactionTimestamp).slice(0,25)
          // console.log("inside while status: 0")          
            i += 1;
      }
      this.setState({ apiData: data })
      console.log(data);
    })
    .catch(console.log)
  }
  filterTransactions(){
    axios.get(nodeURL+`/api/ListTransactions`)
      .then(res => {
        console.log(res)
        var data = res.data;
        var length = data.length;
        console.log(length)
        var i = 0;
        var str = [];
        while(i<length){
              data[i].transactionType=data[i].transactionType.slice(32);
              if(data[i].transactionType=='AddParticipant'){
                // var newStr = {}
                // newStr += "participantInvoking :"+data[i].participantInvoking;
                var newStr = {participantInvoking : data[i].participantInvoking}
                // newStr = JSON.stringify(newStr);
                str.push(newStr)
              }
              i+=1
        }
        this.setState({apiData: newStr })
        // console.log(str[1].participantInvoking)
      })
  }
  render() {
    const {apiData} = this.state;
    return (
      <div className="content">
        <Grid fluid>
        <Row>
            <Col md={12}>
              <Card
                title="Add Consumer"
                content={
                  <form>
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
                          label: "Consumer ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Consumer ID",                                          
                        },
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Consumer Name",
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
                title="System Transactions"
                category="View all historian records."
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Transaction Type</th>
                        <th>Participant Invoking</th>                        
                        <th>Time Stamp</th>                        
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.transactionType}</td>                            
                            <td>{object.participantInvoking}</td>
                            <td>{object.transactionTimestamp}</td>
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

export default AdminTransactions;
