
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { nodeURL } from "variables/Variables.jsx";
class NormalManufacturerList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      mId:{},
      mName:{}
    }
  }
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListManufacturers')
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

export default NormalManufacturerList;
