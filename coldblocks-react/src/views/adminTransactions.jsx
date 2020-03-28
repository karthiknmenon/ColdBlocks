
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { nodeURL } from "variables/Variables.jsx";

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
  render() {
    const {apiData} = this.state;
    return (
      <div className="content">
        <Grid fluid>
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
