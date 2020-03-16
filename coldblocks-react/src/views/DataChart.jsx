
import React, { Component } from "react";
import {Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import Button from "components/CustomButton/CustomButton";
import ChartistGraph from 'react-chartist';

class Chart extends Component {
  render() {
    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    var type = 'Bar'
    return (
  
      <div className="content">
          <Grid>
            <Row>
              <Col md={12}>
              <div className="row">
              <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
              </div>
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default Chart;
