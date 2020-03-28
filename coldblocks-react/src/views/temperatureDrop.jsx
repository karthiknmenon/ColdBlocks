
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { nodeURL } from "variables/Variables.jsx";
class TemperatureDrop extends Component {
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
    fetch(nodeURL+'/api/TemperatureDrop')
    .then(res => res.json())
    .then((data) => {
      var length = data.length;
      console.log(length)
      var i = 0;
      while(i<length){
            data[i].asset=data[i].asset.slice(49);
            data[i].timestamp=data[i].timestamp.slice(12,19)+', '+data[i].timestamp.slice(0,10);
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
                  title="Manufacturer Details"
                  category="Manufacturer Details with ID and Name"
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table striped hover>
                      <thead>
                        <tr>
                          <th>PackageId</th>
                          <th>Location</th>
                          <th>Temperature</th>
                          <th>TimeStamp</th>
                        </tr>

                      </thead>
                      <tbody>                     
                        {Array.isArray(apiData) && apiData.map(object => (
                          <>
                            <tr>
                              <td>{object.asset}</td>
                              <td>{object.newLocation}</td>
                              <td>{object.newTemperature}</td>
                              <td>{object.timestamp}</td>
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

export default TemperatureDrop;
