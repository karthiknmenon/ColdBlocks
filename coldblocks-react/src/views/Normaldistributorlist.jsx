
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { nodeURL } from "variables/Variables.jsx";

class NormalDistributorList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      dName: '',
      dId: '',
      postD: 0
    }
  }

  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListDistributors')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.setState({ apiData: data })
    })
    .catch(console.log)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.postD !== this.state.postD) {
      console.log('postD state has changed.');
      fetch(nodeURL+'/api/ListDistributors')
      .then(res => res.json())
      .then((data) => {
        this.setState({ apiData: data },
          ()=>{
            console.log("callback function")
            console.log(this.state.apiData);
          })
      })
      .catch(console.log)
  }
}
  render() {
    const {apiData} = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Distributor Details"
                category="Distributor Details with ID and Name"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Distributor ID</th>
                        <th>
                          Distributor Name
                        </th>
                      </tr>

                    </thead>
                    <tbody>                     
                      {Array.isArray(apiData) && apiData.map(object => (
                        <>
                          <tr>
                            <td>{object.distributorID}</td>
                            <td>{object.distributorName}</td>
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

export default NormalDistributorList;
