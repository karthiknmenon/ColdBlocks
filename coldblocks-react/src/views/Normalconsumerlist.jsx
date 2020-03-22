
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import axios from 'axios';
import { nodeURL } from "variables/Variables.jsx";
class NormalConsumerList extends Component {
  constructor() {
    super()
    this.state = {
      apiData:{},
      cName: '',
      cId: '',
      postD: 0
    }
  }
  componentDidMount() {
    // console.log("hi");
    fetch(nodeURL+'/api/ListConsumers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ apiData: data })
      // console.log(data);
    })
    .catch(console.log)
  }
  componentDidUpdate(prevProps, prevState) {

    if (prevState.postD !== this.state.postD) {
      console.log("before new fetch"+JSON.stringify(this.state.apiData))
      console.log('postD state has changed. (inside didUpdate now)'+this.state.postD);
      axios.get(nodeURL+`/api/ListConsumers`)
      .then(res => {
        console.log(JSON.stringify(res.data))
        const fetchData = JSON.stringify(res.data);
        this.setState({
          apiData : fetchData
        })
      })
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
                      {Array.isArray(apiData) && apiData.map(object => (
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
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NormalConsumerList;
