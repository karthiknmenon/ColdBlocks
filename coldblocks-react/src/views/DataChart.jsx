
import React, { Component } from "react";
import {Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import ChartistGraph from 'react-chartist';

class Chart extends Component {
  render() {
    // Create a line chart with responsive options

    var data = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
          [287, 385, 490, 492, 554, 586, 698, 695],
          [67, 152, 143, 240, 287, 335, 435, 437],
          [23, 113, 67, 108, 190, 239, 307, 308]
      ]
  };
    var optionsSales = {
      low: 0,
      high: 800,
      showArea: false,
      height: "245px",
      axisX: {
          showGrid: false,
      },
      lineSmooth: true,
      showLine: true,
      showPoint: true,
      fullWidth: true,
      chartPadding: {
          right: 50
      }
  };
   
    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        showPoint: false,
        axisX: {
          labelInterpolationFnc: function(value) {
            
            return value.slice(0, 3);
          }
        }
      }],
      ['screen and (max-width: 640px)', {
        showLine: false,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }]
    ];
    return (
  
      <div className="content">
          <Grid>
            <Row>
              <Col md={12}>
               <Card
                title="Package Temperature"
                category="Line Graph for Package Temperature"                
                content={
                  <ChartistGraph
                    data={data}
                    type="Line"
                    options={optionsSales}
                    responsiveOptions={responsiveOptions}
                    />
                  }
                />
              
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default Chart;
