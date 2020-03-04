
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class ConsumerList extends Component {
  constructor() {
    super()
    this.state = {
      character:{}
    }
  }
  componentDidMount() {
    // console.log("hi");
    fetch('http://localhost:4000/api/ListConsumers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ character: data })
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
                title="Consumer Details"
                category="Consumer Details with ID and Name"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Consumer ID</th>
                        <th>
                          Consumer Name
                        </th>
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(character) && character.map(object => (
                        <>
                          <tr>
                            <td>{object.consumerID}</td>
                            <td>{object.consumerName}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            {/* <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ConsumerList;
