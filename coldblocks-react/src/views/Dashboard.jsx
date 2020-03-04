
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import logo from "assets/img/logo-png.png";
import Card from "../components/Card/Card";

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      apiData:{}
    }
  }
  componentDidMount() {
    // console.log("hi");
    fetch('http://localhost:4000/api/ListPackages')
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
            <Col lg={6}>
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
                            {/* <td>{object.destination}</td> */}
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
          <Row className="text-center">
            <Col lg={12} sm={12}>
            <div className="logo-img">
              <img src={logo} alt="ColdBlocks is a temperature guided route optimization algorithm with secure transactions using blockchain" height="400" width="650"/>
            </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
