
import React, { Component } from "react";
import {Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import ChartistGraph from 'react-chartist';

class Chart extends Component {
  render() {
    // Create a line chart with responsive options

    var data = {
      // labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
          [0, 2, 1, 5, 4, 1, 3, 15],
          [10, 12, 13, 5, 41, 0, -3, 15],
          [0, 21, 11, 25, 14, 11, 31, 5]
      ]
  };
    var optionsSales = {
      low: -50,
      high: 50,
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
