
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";



class NormalSupplierList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      sId:{},
      sName:{}
    }
  }
  
  componentDidMount() {
    // console.log("hi");
    fetch('http://localhost:4000/api/ListSuppliers')
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

export default NormalSupplierList;
