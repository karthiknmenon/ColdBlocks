
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

class AdminTransactions extends Component {
  constructor() {
    super()
    this.state = {
      character:{}
    }
  }
  componentDidMount() {
    // console.log("hi");
    fetch('http://localhost:4000/api/ListTransactions')
    .then(res => res.json())
    .then((data) => {
      this.setState({ character: data },()=>{
        console.log("callback for setState")
      })
      // console.log(data);
    })
    .catch(console.log)
  }
  render() {
    const {character} = this.state;
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
                      {Array.isArray(character) && character.map(object => (
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
